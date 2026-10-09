import json, re, sys, random, collections as C
from html.parser import HTMLParser
SITE, DATA = sys.argv[1], sys.argv[2]
progs = json.load(open(DATA))

class T(HTMLParser):
    SKIP = {'script','style','svg','head','nav','footer','header'}
    def __init__(s):
        super().__init__(); s.depth=0; s.out=[]; s.inmain=0
    def handle_starttag(s,t,a):
        if t=='main': s.inmain+=1
        if t in s.SKIP: s.depth+=1
    def handle_endtag(s,t):
        if t=='main': s.inmain-=1
        if t in s.SKIP and s.depth: s.depth-=1
    def handle_data(s,d):
        if s.inmain and not s.depth: s.out.append(d)
def text(path):
    p=T(); p.feed(open(path,encoding='utf8').read()); return ' '.join(' '.join(p.out).split())
def toks(s): return re.findall(r"[a-z0-9'’]+", s.lower())

pages={}
for p in progs:
    f=f"{SITE}{p['page_url']}index.html"
    pages[p['page_url']]=toks(text(f))
# check main exists
print('empty pages', sum(1 for v in pages.values() if not v))
K=5
sh={u:[tuple(t[i:i+K]) for i in range(len(t)-K+1)] for u,t in pages.items()}
df=C.Counter()
for u,s in sh.items(): df.update(set(s))
N=len(pages)
# page-specific words: tokens covered only by shingles appearing on <=2 pages (school's M+W pair)
def uniq_words(u, maxdf):
    t=pages[u]; cov=[False]*len(t)
    for i,g in enumerate(sh[u]):
        if df[g]<=maxdf:
            for j in range(i,i+K): cov[j]=True
    return sum(cov)
rows=[]
byurl={p['page_url']:p for p in progs}
for u in pages:
    total=len(pages[u]); ub=uniq_words(u,2); u1=uniq_words(u,1)
    rows.append((u,total,ub,u1,byurl[u]['status']))
import statistics as S
act=[r for r in rows if r[4]=='active']
for lab,i in (('total',1),('unique<=2 pages',2),('unique to page',3)):
    v=sorted(r[i] for r in act); print(lab,'min',v[0],'p10',v[len(v)//10],'median',S.median(v),'p90',v[9*len(v)//10],'max',v[-1])
print('median pct unique(<=2)', S.median(r[2]/r[1] for r in act))
print('median pct unique(1)', S.median(r[3]/r[1] for r in act))
for slug in ['/soccer/mens/programs/notre-dame-fighting-irish/','/soccer/womens/programs/west-liberty-hilltoppers/','/soccer/mens/programs/belmont-bruins/']:
    print([r for r in rows if r[0]==slug])
# Jaccard
def jac(a,b):
    A,B=set(sh[a]),set(sh[b]); return len(A&B)/len(A|B)
urls=[r[0] for r in act]; random.seed(1)
rp=[jac(*random.sample(urls,2)) for _ in range(3000)]
rp.sort(); print('random pair jaccard p10/med/p90', rp[300], S.median(rp), rp[2700])
# M/W pairs
bykey=C.defaultdict(dict)
for p in progs:
    if p['status']=='active': bykey[p['school_name']][p['gender']]=p['page_url']
pairs=[(v['M'],v['W']) for v in bykey.values() if 'M' in v and 'W' in v]
pj=sorted(jac(a,b) for a,b in pairs); print('M/W same-school pairs',len(pairs),'jaccard p10/med/p90', pj[len(pj)//10], S.median(pj), pj[9*len(pj)//10])
# same conference pairs
conf=C.defaultdict(list)
for p in progs:
    if p['status']=='active': conf[(p['conference'],p['gender'])].append(p['page_url'])
cp=[]
for v in conf.values():
    for _ in range(min(20,len(v))):
        if len(v)>1: cp.append(jac(*random.sample(v,2)))
cp.sort(); print('same-conf pairs jaccard median', S.median(cp))
json.dump(rows, open(sys.argv[3],'w'))
