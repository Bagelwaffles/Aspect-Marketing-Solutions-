#!/usr/bin/env python3
import asyncio, importlib.util
from pathlib import Path

spec=importlib.util.spec_from_file_location('saad_v2', Path('tools/build_saad_collaboration_v2.py'))
m=importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

m.scenes=[
{'title':'SAAD — I SEE A REAL FIT','kicker':'LINKEDIN GROWTH × AMS','bullets':['Founders, coaches & CEOs','Authority + personal brand','Opportunity-focused growth'],'narration':"Hi Saad. I looked more closely at your profile, and your focus is clear: helping founders, coaches, and CEOs build authority, grow their personal brands, and turn LinkedIn visibility into opportunity. That is where I think Aspect Marketing Solutions may genuinely complement what you do."},
{'title':'YOUR EDGE: HUMAN POSITIONING','kicker':'LINKEDIN • GHOSTWRITING • BRANDING','bullets':['Founder voice','Platform-native strategy','Trust before automation'],'narration':"Your edge is human positioning: knowing what a founder should say, how it should sound, and what earns trust on LinkedIn. That is not something I want automation to replace. It is something automation should support."},
{'title':'OUR EDGE: THE EXECUTION SYSTEM','kicker':'ASPECT MARKETING SOLUTIONS','bullets':['Content agents','Marketing audits','Automation + publishing'],'narration':"AMS is building the execution layer around that strategy: content agents, marketing audits, workflow automation, publishing systems, and lead support coordinated through one cloud command center."},
{'title':'COLLAB IDEA #1','kicker':'LINKEDIN AUTHORITY AUDIT','bullets':['Your LinkedIn judgment','AMS structured analysis','Clear action plan'],'narration':"One idea is a LinkedIn Authority Audit: your platform and positioning expertise combined with AMS analysis and delivery, giving founders a practical plan instead of vague advice."},
{'title':'COLLAB IDEA #2','kicker':'FOUNDER CONTENT ENGINE','bullets':['Your strategy sets the voice','AMS builds the pipeline','Human approval stays in control'],'narration':"A second idea is a founder content engine. You define the voice, positioning, and standards. AMS handles the repeatable pipeline around drafts, review, publishing preparation, and follow-up."},
{'title':'COLLAB IDEA #3','kicker':'CO-BRANDED GROWTH SYSTEM','bullets':['Messaging','Content','Publishing','Follow-up'],'narration':"A third option is a small co-branded growth offer connecting messaging, content, publishing, and follow-up. It could start as a joint service, referral partnership, or white-label workflow."},
{'title':'VIEWS → LEADS','kicker':'THE GAP BOTH SIDES CARE ABOUT','bullets':['Attention','Trust','Conversation','Opportunity'],'narration':"I also noticed your post about LinkedIn content getting views but zero leads. That gap is exactly where our work may intersect: moving from attention, to trust, to conversation, to a real next step."},
{'title':'LET’S TEST ONE SMALL PROJECT','kicker':'M. SAAD RAUF × ASPECT MARKETING SOLUTIONS','bullets':['Compare systems','Pick one useful test','Measure the result','Build from evidence'],'narration':"I am not proposing a giant partnership. I would rather compare systems, choose one small project that could create value, and test it. If it works, we build from evidence. Saad, if that sounds interesting, let’s see what we can build together."}
]

asyncio.run(m.main())
Path('AMS_M_Saad_Rauf_Collaboration_Personalized_V2.mp4').rename('AMS_M_Saad_Rauf_Collaboration_Personalized_V3.mp4')
Path('AMS_M_Saad_Rauf_Collaboration_Personalized_V2_Script.txt').rename('AMS_M_Saad_Rauf_Collaboration_Personalized_V3_Script.txt')
