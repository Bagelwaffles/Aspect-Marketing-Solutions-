#!/usr/bin/env python3
import asyncio, math, os, random, subprocess, textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

ROOT=Path.cwd()
OUT=ROOT/'build_saad_collab'
AUDIO=OUT/'audio'; OVER=OUT/'overlays'; CLIPS=OUT/'clips'
for p in (OUT,AUDIO,OVER,CLIPS): p.mkdir(parents=True, exist_ok=True)
W,H,FPS=1280,720,24
VOICE='en-US-JennyNeural'
RATE='-3%'
FONT_REG='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
FONT_BOLD='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
FONT_MONO='/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'

WHITE=(247,249,255); SOFT=(184,194,218); CYAN=(73,211,255); PURPLE=(151,95,255); GREEN=(69,230,164); AMBER=(255,183,77)
CARD=(13,21,42,235); CARD2=(18,29,55,235)

SCENES=[
{
 'title':'M. SAAD RAUF × AMS', 'subtitle':'A POTENTIAL COLLABORATION', 'kind':'intro',
 'bullets':['A different kind of introduction','No hard sell','Just an idea worth exploring'],
 'narration':"Hi Saad. I wanted to reach out in a different way and show you what we're building at Aspect Marketing Solutions."
},
{
 'title':'WHAT WE’RE BUILDING', 'subtitle':'A CLOUD AI COMMAND CENTER', 'kind':'network',
 'bullets':['Specialized AI agents','Business automation','Content + publishing','Sales support','Integrations','Operator-controlled workflows'],
 'narration':"AMS is becoming a cloud-based AI command center built around specialized agents, business automation, content, publishing, sales support, integrations, and operator-controlled workflows."
},
{
 'title':'NO ASSUMPTIONS', 'subtitle':'LET’S FIND THE REAL OVERLAP', 'kind':'overlap',
 'bullets':['Your work','Our platform','Shared opportunities'],
 'narration':"Rather than assume where our work overlaps, I'd like to explore it. The most interesting collaborations usually start by finding the real intersection between two sets of capabilities."
},
{
 'title':'POSSIBLE COLLABORATION PATHS', 'subtitle':'FIVE DIRECTIONS WORTH EXPLORING', 'kind':'paths',
 'bullets':['Co-build AI + automation solutions','Integrate complementary technology','Collaborate on client projects','Create joint service offers','Share ideas + technical experience'],
 'narration':"There are several directions that could make sense: co-building AI and automation solutions, integrating complementary technology, collaborating on client projects, creating joint service offers, or simply sharing ideas and technical experience."
},
{
 'title':'BUILT FOR THE LONG TERM', 'subtitle':'AI + SOFTWARE + REAL OPERATIONS', 'kind':'roadmap',
 'bullets':['Practical automation','Human control where it matters','Scalable cloud workflows','Real business outcomes'],
 'narration':"We're building for the long term, and I'm especially interested in connecting with people who see where AI, software, and real business operations are heading."
},
{
 'title':'IF THE DIRECTION CONNECTS…', 'subtitle':'LET’S HAVE A CONVERSATION', 'kind':'invite',
 'bullets':['Compare what we’re building','Look for one useful overlap','Start small if it makes sense'],
 'narration':"Saad, if any part of that direction connects with what you're working on, I'd love to have a conversation and see whether there's something valuable we could build together."
},
{
 'title':'LET’S EXPLORE WHAT’S POSSIBLE', 'subtitle':'M. SAAD RAUF × ASPECT MARKETING SOLUTIONS', 'kind':'cta',
 'bullets':['Open to a conversation?','aspectmarketingsolutions.app'],
 'narration':"Aspect Marketing Solutions. Let's explore what's possible."
}
]

def font(size,bold=False,mono=False):
    return ImageFont.truetype(FONT_MONO if mono else (FONT_BOLD if bold else FONT_REG), size)

def run(cmd):
    print('+',' '.join(map(str,cmd)), flush=True)
    subprocess.run(cmd,check=True)

def probe(path):
    return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(path)],text=True).strip())

def wrap(draw,text,f,maxw):
    words=text.split(); lines=[]; cur=''
    for word in words:
        test=word if not cur else cur+' '+word
        if draw.textbbox((0,0),test,font=f)[2] <= maxw: cur=test
        else:
            if cur: lines.append(cur)
            cur=word
    if cur: lines.append(cur)
    return lines

def roundrect(d,box,r,fill,outline=None,width=1): d.rounded_rectangle(box,radius=r,fill=fill,outline=outline,width=width)

def make_bg(path):
    secs=7; frames=secs*FPS; rng=random.Random(21)
    pts=[]
    for _ in range(42): pts.append([rng.uniform(0,W),rng.uniform(0,H),rng.uniform(-15,15),rng.uniform(-9,9),rng.choice([CYAN,PURPLE,(86,130,220)])])
    proc=subprocess.Popen(['ffmpeg','-v','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s',f'{W}x{H}','-r',str(FPS),'-i','-','-an','-c:v','libx264','-preset','veryfast','-crf','23','-pix_fmt','yuv420p',str(path)],stdin=subprocess.PIPE)
    for fi in range(frames):
        arr=np.zeros((H,W,3),dtype=np.uint8)
        top=np.array([3,6,17],float); bot=np.array([9,17,34],float); grad=np.linspace(0,1,H)[:,None]
        row=(top*(1-grad)+bot*grad).astype(np.uint8); arr[:]=row[:,None,:]
        im=Image.fromarray(arr,'RGB').convert('RGBA'); d=ImageDraw.Draw(im,'RGBA')
        off=(fi*1.6)%86
        for x in range(-86+int(off),W,86): d.line((x,0,x,H),fill=(65,90,150,14),width=1)
        for y in range(-86+int(off),H,86): d.line((0,y,W,y),fill=(65,90,150,11),width=1)
        for p in pts: p[0]=(p[0]+p[2]/FPS)%W; p[1]=(p[1]+p[3]/FPS)%H
        for i,p in enumerate(pts):
            for q in pts[i+1:]:
                dx=p[0]-q[0]; dy=p[1]-q[1]; dist=(dx*dx+dy*dy)**.5
                if dist<140: d.line((p[0],p[1],q[0],q[1]),fill=(*p[4],int(32*(1-dist/140))),width=1)
        for p in pts: d.ellipse((p[0]-2,p[1]-2,p[0]+2,p[1]+2),fill=(*p[4],170))
        proc.stdin.write(np.asarray(im.convert('RGB'),dtype=np.uint8).tobytes())
    proc.stdin.close(); proc.wait()
    if proc.returncode: raise SystemExit(proc.returncode)

def glow(im,xy,r,color,alpha=90):
    layer=Image.new('RGBA',im.size,(0,0,0,0)); d=ImageDraw.Draw(layer); x,y=xy
    d.ellipse((x-r,y-r,x+r,y+r),fill=(*color,alpha)); layer=layer.filter(ImageFilter.GaussianBlur(r//2)); im.alpha_composite(layer)

def make_overlay(scene,idx,path):
    im=Image.new('RGBA',(W,H),(0,0,0,0)); d=ImageDraw.Draw(im)
    roundrect(d,(34,28,1246,88),20,(7,13,28,220),(72,98,150,120),2)
    d.text((58,47),'ASPECT MARKETING SOLUTIONS',font=font(19,True),fill=WHITE)
    d.text((1050,48),'COLLABORATION CONCEPT',font=font(14,True,True),fill=CYAN)
    roundrect(d,(58,120,280,158),18,(18,54,77,215),(73,211,255,140),1)
    d.text((76,130),f'SCENE {idx:02d}  •  LINKEDIN',font=font(14,True,True),fill=CYAN)
    ts=55 if len(scene['title'])<27 else 45 if len(scene['title'])<40 else 36
    tf=font(ts,True); y=195
    for line in wrap(d,scene['title'],tf,720)[:3]: d.text((58,y),line,font=tf,fill=WHITE); y+=ts+7
    sf=font(18,True); d.text((60,y+9),scene['subtitle'],font=sf,fill=SOFT); y+=50
    d.rounded_rectangle((58,y,330,y+7),4,fill=PURPLE)
    by=max(y+38,360); caps=scene['bullets']; rows=len(caps)
    if rows<=3:
        for j,c in enumerate(caps):
            yy=by+j*67; roundrect(d,(58,yy,640,yy+50),14,CARD,(82,102,152,100),1)
            d.ellipse((76,yy+16,94,yy+34),fill=GREEN)
            d.text((109,yy+14),c,font=font(17,True),fill=WHITE)
    else:
        for j,c in enumerate(caps):
            col=j%2; row=j//2; xx=58+col*305; yy=by+row*67
            roundrect(d,(xx,yy,xx+282,yy+50),14,CARD,(82,102,152,100),1)
            d.ellipse((xx+15,yy+16,xx+33,yy+34),fill=GREEN)
            tx=c if len(c)<=30 else c[:28]+'…'; d.text((xx+45,yy+14),tx,font=font(14,True),fill=WHITE)
    cx,cy=1000,350; color=CYAN if scene['kind'] in ('network','intro') else PURPLE if scene['kind'] in ('overlap','paths') else GREEN
    glow(im,(cx,cy),105,color,90); d=ImageDraw.Draw(im)
    d.ellipse((cx-66,cy-66,cx+66,cy+66),fill=(8,16,34,235),outline=(*color,230),width=3)
    center='AMS' if scene['kind']!='overlap' else 'FIT?'
    tw=d.textbbox((0,0),center,font=font(21,True,True))[2]; d.text((cx-tw/2,cy-12),center,font=font(21,True,True),fill=WHITE)
    for a in range(0,360,45):
        r=118; xx=cx+math.cos(math.radians(a))*r; yy=cy+math.sin(math.radians(a))*r
        d.line((cx,cy,xx,yy),fill=(*color,75),width=2); d.ellipse((xx-7,yy-7,xx+7,yy+7),fill=color)
    roundrect(d,(790,518,1218,616),20,(10,18,37,225),(79,98,145,110),1)
    label='POTENTIAL COLLABORATION' if idx<7 else 'OPEN INVITATION'
    d.text((814,537),label,font=font(14,True,True),fill=SOFT)
    role='Explore the overlap — then build what makes sense.' if idx<7 else 'aspectmarketingsolutions.app'
    for k,line in enumerate(wrap(d,role,font(20,True),370)[:2]): d.text((814,565+k*27),line,font=font(20,True),fill=WHITE)
    d.rectangle((58,676,1222,681),fill=(70,82,118,100)); d.rectangle((58,676,58+1164*(idx/len(SCENES)),681),fill=CYAN)
    im.save(path)

async def tts_all():
    import edge_tts
    for i,s in enumerate(SCENES,1):
        out=AUDIO/f'{i:02d}.mp3'
        c=edge_tts.Communicate(s['narration'],voice=VOICE,rate=RATE,volume='+0%')
        await c.save(str(out))

def main():
    bg=OUT/'bg.mp4'
    if not bg.exists(): make_bg(bg)
    asyncio.run(tts_all())
    durations=[]
    for i,s in enumerate(SCENES,1):
        a=AUDIO/f'{i:02d}.mp3'; dur=probe(a)+0.12; durations.append(dur); make_overlay(s,i,OVER/f'{i:02d}.png')
        fade=max(0,dur-0.16)
        fc=f'[0:v]scale={W}:{H},fps={FPS}[b];[1:v]format=rgba[o];[b][o]overlay=0:0:format=auto,fade=t=in:st=0:d=0.12,fade=t=out:st={fade:.3f}:d=0.16[v]'
        run(['ffmpeg','-v','error','-y','-stream_loop','-1','-i',str(bg),'-loop','1','-i',str(OVER/f'{i:02d}.png'),'-i',str(a),'-filter_complex',fc,'-map','[v]','-map','2:a:0','-t',f'{dur:.3f}','-r',str(FPS),'-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-c:a','aac','-b:a','160k',str(CLIPS/f'{i:02d}.mp4')])
    concat=OUT/'concat.txt'; concat.write_text('\n'.join(f"file '{(CLIPS/f'{i:02d}.mp4').resolve()}'" for i in range(1,len(SCENES)+1)))
    raw=OUT/'raw.mp4'; run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i',str(concat),'-c','copy',str(raw)])
    bed=OUT/'bed.wav'
    run(['ffmpeg','-v','error','-y','-f','lavfi','-i','sine=frequency=55:sample_rate=48000:duration=70','-f','lavfi','-i','sine=frequency=82.41:sample_rate=48000:duration=70','-f','lavfi','-i','anoisesrc=color=pink:sample_rate=48000:duration=70','-filter_complex','[0:a]volume=0.07[a0];[1:a]volume=0.04[a1];[2:a]lowpass=f=750,volume=0.008[a2];[a0][a1][a2]amix=inputs=3,afade=t=in:st=0:d=2,afade=t=out:st=67:d=3','-c:a','pcm_s16le',str(bed)])
    final=ROOT/'AMS_M_Saad_Rauf_Collaboration_Concept.mp4'
    run(['ffmpeg','-v','error','-y','-i',str(raw),'-stream_loop','-1','-i',str(bed),'-filter_complex','[1:a]volume=0.16[bed];[0:a][bed]amix=inputs=2:duration=first:dropout_transition=2[a]','-map','0:v:0','-map','[a]','-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart','-shortest',str(final)])
    script=ROOT/'AMS_M_Saad_Rauf_Collaboration_Script.txt'; script.write_text('\n\n'.join(f"{i}. {s['title']}\n{s['narration']}" for i,s in enumerate(SCENES,1)),encoding='utf-8')
    print('FINAL',final,'duration',probe(final),'scene_durations',durations)

if __name__=='__main__': main()
