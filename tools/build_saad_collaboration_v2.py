#!/usr/bin/env python3
import asyncio, math, subprocess, textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W,H,FPS=1280,720,24
ROOT=Path('.')
OUT=ROOT/'saad_v2_build'; OUT.mkdir(exist_ok=True)
AUDIO=OUT/'audio'; AUDIO.mkdir(exist_ok=True)
FRAMES=OUT/'frames'; FRAMES.mkdir(exist_ok=True)
CLIPS=OUT/'clips'; CLIPS.mkdir(exist_ok=True)
VOICE='en-US-JennyNeural'
FONT='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
BOLD='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

scenes=[
{
 'title':'SAAD — I SEE A REAL FIT',
 'kicker':'LINKEDIN GROWTH × AMS',
 'bullets':['Founders, coaches & CEOs','Authority + personal brand','Opportunities, not vanity metrics'],
 'narration':"Hi Saad. I took a closer look at your profile, and I wanted to send something more useful than a generic LinkedIn message. You help founders, coaches, and CEOs build authority, strengthen their personal brands, and turn LinkedIn visibility into real opportunities. That overlaps with what we are building at Aspect Marketing Solutions in a way that could be genuinely useful."
},
{
 'title':'YOUR STRENGTH: POSITIONING THAT FEELS HUMAN',
 'kicker':'LINKEDIN • GHOSTWRITING • BRANDING',
 'bullets':['Platform-native strategy','Founder voice & positioning','Content designed to create opportunity'],
 'narration':"Your side of the equation is human positioning: LinkedIn strategy, ghostwriting, branding, and understanding what makes a founder worth paying attention to. That is exactly the piece automation should not flatten or replace. The best system would use your judgment to guide the machine, not let the machine erase the founder's voice."
},
{
 'title':'OUR STRENGTH: THE EXECUTION SYSTEM',
 'kicker':'ASPECT MARKETING SOLUTIONS',
 'bullets':['Content & marketing agents','Audits + workflow automation','Publishing + lead support'],
 'narration':"AMS is building the execution layer behind that strategy: content generation, marketing audits, workflow automation, publishing systems, lead support, and specialized AI agents coordinated through one cloud command center. In other words, you can shape what should be said and why. AMS can help operationalize how that work gets produced, reviewed, delivered, and measured."
},
{
 'title':'COLLAB IDEA #1',
 'kicker':'LINKEDIN AUTHORITY AUDIT',
 'bullets':['Saad: positioning + LinkedIn expertise','AMS: structured audit + delivery','Action plan the client can execute'],
 'narration':"The first collaboration idea is a LinkedIn Authority Audit. Your platform expertise and positioning judgment could combine with the AMS audit workflow to review a founder's profile, messaging, content, and conversion path, then turn that review into a clear action plan instead of another vague strategy document."
},
{
 'title':'COLLAB IDEA #2',
 'kicker':'FOUNDER CONTENT ENGINE',
 'bullets':['Your strategy defines the voice','AMS builds the repeatable pipeline','Human approval stays in control'],
 'narration':"The second idea is a founder content engine. Your positioning and ghostwriting strategy defines the voice, themes, and standards. AMS handles the repeatable pipeline around ideation, drafts, review, publishing preparation, and follow-up. The goal is leverage without turning the founder into generic AI content."
},
{
 'title':'COLLAB IDEA #3',
 'kicker':'CO-BRANDED GROWTH SYSTEM',
 'bullets':['Messaging','Content','Publishing','Follow-up'],
 'narration':"The third idea is a co-branded growth system: one offer that connects messaging, content, publishing, and follow-up. We could test it as a small joint service, a referral partnership, or even a white-label workflow where each side brings the part it does best."
},
{
 'title':'VIEWS ARE NOT THE FINISH LINE',
 'kicker':'FROM ATTENTION → OPPORTUNITY',
 'bullets':['Views','Trust','Conversation','Lead'],
 'narration':"I also noticed your point about LinkedIn posts getting views but zero leads. That is one of the most interesting areas of overlap. Attention alone is not the business result. The real system has to connect the post to trust, the trust to a conversation, and the conversation to a useful next step. That is exactly the kind of gap AMS is being designed to operationalize."
},
{
 'title':'LET’S TEST ONE SMALL PROJECT',
 'kicker':'M. SAAD RAUF × ASPECT MARKETING SOLUTIONS',
 'bullets':['Compare systems','Pick one useful test','Measure the result','Build from evidence'],
 'narration':"I am not looking to force a partnership or make this bigger than it needs to be. I would rather compare what you are building with what we are building, pick one small project that could create real value, and test it. If the result is good, we build from evidence. M. Saad Rauf and Aspect Marketing Solutions. Let's see what we can build together."
}
]

def F(n,b=False): return ImageFont.truetype(BOLD if b else FONT,n)
def run(cmd): subprocess.run(cmd,check=True)
def probe(p): return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(p)],text=True).strip())

def wrap(draw,text,font,maxw):
    words=text.split(); lines=[]; cur=''
    for w in words:
        t=w if not cur else cur+' '+w
        if draw.textbbox((0,0),t,font=font)[2] <= maxw: cur=t
        else:
            if cur: lines.append(cur)
            cur=w
    if cur: lines.append(cur)
    return lines

def draw_scene(s,idx):
    im=Image.new('RGB',(W,H),(5,8,19)); d=ImageDraw.Draw(im)
    # gradient strips
    for y in range(H):
        t=y/H
        c=(int(5+7*t),int(8+12*t),int(19+24*t))
        d.line((0,y,W,y),fill=c)
    # glows
    glow=Image.new('RGBA',(W,H),(0,0,0,0)); gd=ImageDraw.Draw(glow)
    gd.ellipse((-180,-120,520,580),fill=(145,92,255,55)); gd.ellipse((840,100,1500,760),fill=(70,214,255,45))
    glow=glow.filter(ImageFilter.GaussianBlur(90)); im=Image.alpha_composite(im.convert('RGBA'),glow); d=ImageDraw.Draw(im)
    # header
    d.rounded_rectangle((38,30,1242,88),18,fill=(10,16,32,230),outline=(67,89,135,150),width=2)
    d.text((60,48),'ASPECT MARKETING SOLUTIONS',font=F(20,True),fill=(247,249,255))
    d.text((1120,48),f'{idx}/8',font=F(18,True),fill=(70,214,255))
    # kicker
    k=s['kicker']; kf=F(18,True); kw=d.textbbox((0,0),k,font=kf)[2]
    d.rounded_rectangle((58,118,90+kw,158),16,fill=(18,49,72,225),outline=(70,214,255,130),width=1)
    d.text((74,128),k,font=kf,fill=(70,214,255))
    # title
    tf=F(48 if len(s['title'])<34 else 40,True)
    lines=wrap(d,s['title'],tf,760); y=195
    for line in lines[:3]: d.text((58,y),line,font=tf,fill=(248,250,255)); y+=58
    d.rounded_rectangle((58,y+14,310,y+22),4,fill=(147,92,255))
    # bullets
    by=max(y+62,390)
    for j,b in enumerate(s['bullets'][:4]):
        yy=by+j*64
        d.rounded_rectangle((58,yy,710,yy+48),15,fill=(16,24,45,235),outline=(79,99,145,100),width=1)
        d.ellipse((76,yy+15,94,yy+33),fill=(62,225,164))
        d.text((110,yy+12),b,font=F(19,True),fill=(244,247,255))
    # right-side collaboration network
    cx,cy=1000,350
    d.ellipse((cx-85,cy-85,cx+85,cy+85),fill=(10,18,37,220),outline=(70,214,255,220),width=3)
    d.text((cx-40,cy-16),'BUILD',font=F(23,True),fill=(248,250,255))
    nodes=[('SAAD',cx-165,cy-120,(147,92,255)),('AMS',cx+165,cy-120,(70,214,255)),('VOICE',cx-180,cy+105,(62,225,164)),('SYSTEM',cx+180,cy+105,(255,183,77))]
    for label,x,y2,c in nodes:
        d.line((cx,cy,x,y2),fill=(*c,130),width=3)
        d.ellipse((x-42,y2-42,x+42,y2+42),fill=(11,19,38,240),outline=(*c,220),width=3)
        tw=d.textbbox((0,0),label,font=F(14,True))[2]; d.text((x-tw/2,y2-8),label,font=F(14,True),fill=(248,250,255))
    # footer
    d.text((58,675),'A POTENTIAL COLLABORATION — NOT A GENERIC SALES PITCH',font=F(15,True),fill=(184,194,218))
    p=FRAMES/f'{idx:02d}.png'; im.convert('RGB').save(p,quality=95); return p

async def make_tts(text,path):
    import edge_tts
    await edge_tts.Communicate(text,VOICE,rate='-3%').save(str(path))

async def main():
    audio=[]; durations=[]; framepaths=[]
    for i,s in enumerate(scenes,1):
        a=AUDIO/f'{i:02d}.mp3'; await make_tts(s['narration'],a); audio.append(a)
        durations.append(probe(a)+0.08)
        framepaths.append(draw_scene(s,i))
    clips=[]
    for i,(a,p,dur) in enumerate(zip(audio,framepaths,durations),1):
        clip=CLIPS/f'{i:02d}.mp4'; fade=max(0,dur-0.18)
        vf=f"scale=1280:720,zoompan=z='min(zoom+0.00018,1.018)':d=1:s=1280x720:fps=24,fade=t=in:st=0:d=0.12,fade=t=out:st={fade:.3f}:d=0.16,format=yuv420p"
        run(['ffmpeg','-v','error','-y','-loop','1','-i',str(p),'-i',str(a),'-t',f'{dur:.3f}','-vf',vf,'-c:v','libx264','-preset','veryfast','-crf','20','-c:a','aac','-b:a','160k','-shortest',str(clip)])
        clips.append(clip)
    concat=OUT/'concat.txt'; concat.write_text('\n'.join(f"file '{c.resolve()}'" for c in clips))
    final=ROOT/'AMS_M_Saad_Rauf_Collaboration_Personalized_V2.mp4'
    run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i',str(concat),'-c','copy','-movflags','+faststart',str(final)])
    script=ROOT/'AMS_M_Saad_Rauf_Collaboration_Personalized_V2_Script.txt'
    script.write_text('\n\n'.join(f"{i}. {s['title']}\n{s['narration']}" for i,s in enumerate(scenes,1)),encoding='utf-8')
    print(final,probe(final))

if __name__=='__main__': asyncio.run(main())
