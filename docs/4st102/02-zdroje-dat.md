Pokud chceme provést kvalitní datovou analýzu zvoleného problému, nejde jen o volbu vhodné statistické metody, ale o celý proces, který se skládá z několika kroků:

1. Získání kvalitního datového souboru (velmi důležitá část analýzy; známé rčení „garbage in, garbage out“ vystihuje, že z nekvalitních dat nelze získat kvalitní výsledky)
2. Předzpracování dat (převod zdrojového datového souboru do formátu pro vybraný statistický nástroj, kontrola chyb, vyhodnocení chybějících hodnot apod.)
3. Samotná analýza dat (výběr a správné použití statistických metod)
4. Interpretace výsledků (tvorba prezentací, vizualizace, popis výsledků)

Všechny tyto kroky jsou pro statistika důležité a v průběhu kurzu celý tento proces obsáhneme.

## Jak získat zdrojová data pro analýzu?

V dnešní době počítačové techniky a internetu jsou vůbec nejobjemnější formou strukturovaných dat tzv. data administrativní, která se týkají činnosti firem nebo úřadů (daně, sociální a zdravotní pojištění, evidence pracovní neschopnosti apod.) nebo transakční data (nákupy v e-shopu, návštěvníci webové stránky apod.). Zde se tak jedná spíše o zachycení nějaké aktivity. Pro datovou analýzu jsou však velmi důležitá, protože nám pomáhají odhalit finanční podvody či hackerské útoky, přizpůsobit webové stránky uživatelům nebo optimalizovat chod firmy. Na druhou stranu často neobsahují subjektivní názory lidí. K tomuto účelu proto obvykle používáme data pocházející z výběrových šetření.

Data z výběrových šetření můžeme rozdělit na data primární (sbíráme je sami) a data sekundární (nasbíral je někdo jiný). Primární data mají výhodu v tom, že slouží přesně k účelu, který odpovídá přání zadavatele. Na druhou stranu je problémem finanční náročnost, pomalost sběru, ale i fakt, že lze snadno udělat chybu nebo něco nedomyslet a data tak znehodnotit nebo alespoň zkomplikovat jejich analýzu. I to je jeden z důvodů, proč je dobré ovládat techniky výběrových šetření.

Na druhé straně potom stojí data sekundární, která již někdo nasbíral (byť třeba i pro trochu jiný účel), ale pro naši analýzu jsou vhodná. Taková data jsou levná (mnohdy zcela zdarma), obvykle rychle k dispozici, ale jejich sběr nemůžeme ovlivnit a cizí chyby často jen těžko odhalíme. Pokud se pro analýzu sekundárních dat rozhodneme, potom je můžeme získat buď z veřejných, nebo z privátních zdrojů.

Veřejné zdroje:

- <a href="https://csu.gov.cz" target="_blank" rel="noopener">ČSÚ</a> (<a href="https://vdb.czso.cz" target="_blank" rel="noopener">Veřejná databáze</a>; sčítání, VŠPS, SILC, národní účty, CPI)
- <a href="https://www.cnb.cz" target="_blank" rel="noopener">ČNB</a> (<a href="https://www.cnb.cz/arad/#/cs/home" target="_blank" rel="noopener">ARAD</a>)
- ministerstva (<a href="https://mpsv.gov.cz" target="_blank" rel="noopener">MPSV</a>, <a href="https://mf.gov.cz" target="_blank" rel="noopener">MF</a>, <a href="https://msmt.gov.cz" target="_blank" rel="noopener">MŠMT</a>)
- <a href="https://www.uzis.cz" target="_blank" rel="noopener">ÚZIS</a>, <a href="https://data.gov.cz" target="_blank" rel="noopener">data.gov.cz</a>
- mezinárodně <a href="https://ec.europa.eu/eurostat" target="_blank" rel="noopener">Eurostat</a> (harmonizovaná data, dodává je i ČSÚ), <a href="https://www.oecd.org" target="_blank" rel="noopener">OECD</a>, <a href="https://data.worldbank.org" target="_blank" rel="noopener">Světová banka</a>, <a href="https://www.imf.org" target="_blank" rel="noopener">MMF</a>, <a href="https://data.un.org" target="_blank" rel="noopener">OSN</a>

Privátní zdroje:

Výzkumné agentury (<a href="https://www.stem.cz" target="_blank" rel="noopener">STEM</a>, <a href="https://www.median.eu" target="_blank" rel="noopener">Median</a>, <a href="https://www.kantar.com" target="_blank" rel="noopener">Kantar</a>, <a href="https://www.ipsos.com/cs-cz" target="_blank" rel="noopener">Ipsos</a>, <a href="https://nms.global/cz/" target="_blank" rel="noopener">NMS</a>; <a href="https://cvvm.soc.cas.cz" target="_blank" rel="noopener">CVVM</a> je akademické pracoviště <a href="https://www.soc.cas.cz" target="_blank" rel="noopener">SOÚ AV ČR</a>; standardy kvality sdružení <a href="https://www.simar.cz" target="_blank" rel="noopener">SIMAR</a>), komerční databáze, interní data firem. Tato data bývají aktuálnější, podrobnější a připravená na míru. Na druhou stranu jsou placená, metodika často není veřejná a hrozí střet zájmů zadavatele (volba otázek a toho, co se zveřejní); je také třeba řešit ochranu osobních údajů (GDPR).

## Kvalita dat a metody výběru

S výběrovým šetřením se lze snadno setkat i v médiích. Typickým příkladem, který viděl téměř každý, je odhad volebních preferencí. Kritikou ze strany veřejnosti a politiků se nešetří. Bohužel se síla této kritiky velmi často odvíjí od samotných výsledků průzkumu a od toho, kterému politickému táboru daný člověk zrovna fandí. Lze ale takový průzkum kritizovat i z čistě odborného hlediska? Ano, nejprve si ale rozeberme základní pojmy.

Cílem výběrového šetření je dozvědět se něco o celé populaci (tzv. základním souboru), aniž bychom se museli ptát všech. Respondenty proto vybíráme ze seznamu jednotek populace, kterému říkáme opora výběru. Ideální oporou by byl registr obyvatel, ten ale není komerčním agenturám dostupný. V praxi se tedy užívají adresy z veřejného registru RÚIAN, online panely respondentů nebo generovaná telefonní čísla. Už samotná volba opory může zásadně zkreslit výsledek, protože opora obsahuje jen specifickou (mnohdy nenáhodnou) část dané populace. Tomuto zkreslení říkáme chyba pokrytí.

Pokud již máme k dispozici oporu výběru, lze z ní vybrat výběrový soubor, tedy tu část populace, které se skutečně zeptáme. První způsob výběru se nazývá pravděpodobnostní (náhodný): o zařazení rozhoduje náhoda, nikoli člověk, a každá jednotka má známou nenulovou pravděpodobnost, že bude vybrána. Ze statistického hlediska je lepší v tom smyslu, že lze spočítat velikost tzv. výběrové chyby, tedy nakolik se výsledek může lišit od skutečnosti jen proto, že jsme se neptali všech. Má čtyři základní podoby:

- Prostý náhodný výběr: jednotky losujeme z úplného seznamu populace. Je to teoretický ideál, v praxi se ale používá zřídka, protože úplný seznam obvykle chybí.
- Systematický výběr: náhodně zvolíme první jednotku a potom bereme každou k-tou v seznamu. Je-li seznam pravidelně uspořádán (např. každý desátý byt je rohový), může výběr dopadnout jednostranně.
- Stratifikovaný výběr: populaci rozdělíme do vrstev (podle kraje, věku, velikosti firmy) a losujeme v každé zvlášť. Každá vrstva je tak ve výběru zastoupena a výsledek je přesnější. Na tomto principu stojí šetření ČSÚ.
- Skupinový (vícestupňový) výběr: losujeme postupně, nejprve obce, v nich adresy a v domácnosti jednu osobu (např. tu, která měla naposledy narozeniny). Tazatelé nemusejí tolik cestovat, takže je sběr levnější, přesnost je ale o něco nižší.

Pravděpodobnostní výběr je ale drahý a pomalý a potřebuje kvalitní oporu. Druhý způsob je potom nepravděpodobnostní. Sem řadíme především kvótní výběr, který stojí na znalosti struktury populace podle tzv. kvótních znaků (pohlaví, věk, vzdělání, kraj). Tato struktura se nejčastěji přebírá z veřejných statistik (sčítání lidu, VŠPS apod.). Tazatel potom dostane předpis, kolik lidí s jakými znaky má dotázat (např. 5 žen ve věku 30–44 let se středoškolským vzděláním ze Středočeského kraje), a koho konkrétně osloví, je už na něm. Jedná se o dominantní typ výběru v komerční sféře a u většiny volebních průzkumů, protože je rychlý, levný a nepotřebuje oporu výběru. Pojí se s ním ale zásadní problém: soubor se populaci podobá jen v kvótních znacích. Ve všem ostatním rozhoduje tazatel a jeho pohodlí (kdo je doma, otevře, má čas, rád mluví). Souvisí-li ochota odpovídat se zkoumaným jevem, vzniká zkreslení, které kvóty neodstraní.

V průzkumech se navíc často uvádí statistická (výběrová) chyba. Tu lze ale korektně spočítat jen u pravděpodobnostního výběru. U kvótního výběru je uváděná hodnota jen orientační, protože je vypůjčená z teorie náhodného výběru. Důležitější bývají chyby nevýběrové. Postihují každé šetření bez ohledu na způsob výběru, s rostoucím počtem respondentů se nezmenšují a dají se jen těžko změřit:

- Chyba pokrytí: opora výběru nezahrnuje část populace (lidi bez telefonu, bez internetu, bez adresy).
- Chyba z neodpovědí (nonresponse): část oslovených neodpoví a liší se od těch, kteří odpoví.
- Chyba měření: respondent otázce nerozumí, nepamatuje si, nebo odpovídá tak, jak se podle něj očekává (tzv. sociální žádoucnost).
- Chyba zpracování: překlepy a chyby při kódování a přenosu dat.

Mezi další nepravděpodobnostní výběry patří např. příležitostný výběr (kdo je zrovna po ruce); samovýběr (anketa na webu, sdílený dotazník, hlasování diváků); sněhová koule (skryté populace). U nich ale reprezentativitu z podstaty zajistit nelze.

## Metody sběru

Zatímco se metody výběru týkaly toho, jakým způsobem respondenty vybíráme, metody sběru se týkají toho, jakým způsobem od respondentů data získáváme. V praxi se setkáme se čtyřmi základními typy: online dotazování (CAWI), telefonické dotazování (CATI), osobní dotazování s tabletem či notebookem (CAPI) a osobní dotazování s papírovým dotazníkem (PAPI).

1) CAWI je dnes vůbec nejběžnější způsob dotazování, protože je velmi levný, rychlý a data lze snadno zpracovat. Ukazuje se také, že respondenti bývají upřímnější. Nevýhodou ovšem je, že obsáhne pouze tu část populace, která je k dispozici online. Výsledky jsou tak už z podstaty zatíženy chybou pokrytí. Zaslání dotazníku navíc občas komplikují různé spamové filtry.
2) CATI je typ sběru, pomocí kterého jsme čistě teoreticky schopni zasáhnout celou populaci, ale negativní roli hraje nízká ochota odpovídat po telefonu.
3) CAPI je oblíbený, protože můžeme oslovit i obyvatele bez telefonu nebo internetu. Rozhovor navíc provádí školený tazatel, který může vysvětlit případné nejasnosti v otázkách. Na druhou stranu je tento typ sběru drahý a vstupuje sem „efekt tazatele“. Lidé se před cizím člověkem snaží jevit lepšími, než ve skutečnosti jsou, a ne vždy odpovídají dle pravdy. Tazatel si navíc v případě kvótního výběru může vybírat jen lidi, kteří jsou mu sympatičtí, a tak dochází k dalšímu zkreslení. Dalším problémem je časová náročnost a horší dostupnost některých lokalit.
4) PAPI má podobné výhody jako CAPI, ale zpracování dat je mnohem obtížnější, proto se dnes příliš nevyužívá. Pokud probíhá bez přítomnosti tazatele, je situace ještě komplikovanější.

## Co od výběrového šetření čekáme a jak dobře je to splněno?

Vraťme se nyní k volebnímu modelu, který jsme brali jako mediálně známý příklad výběrového šetření. Hlavní věc, kterou bychom právem očekávali, je přesnost nebo alespoň tzv. nevychýlené výsledky se známou chybou (v průměru se trefují do středu terče, viz obrázek 1). Vlivem různých nevýběrových chyb a faktu, že se s největší pravděpodobností jedná o kvótní výběr, nemůžeme míru vychýlení a možnou chybu dost dobře kvantifikovat.

![Čtyři terče: nevychýlené s malým rozptylem, vychýlené s malým rozptylem, nevychýlené s velkým rozptylem, vychýlené s velkým rozptylem](obrazek1_terce.png)

*Obrázek 1: Výběrová chyba a vychýlení na příkladu střelby do terče. Střed terče odpovídá skutečné hodnotě v populaci.*

Kvótní výběr (a s ním volební model či jiný podobný průzkum) přitom není z principu špatný. Základní odhady potřebné pro byznys nám dává. Statistikům to ovšem často nestačí. Proto mnohem raději vidíme výběr pravděpodobnostní, u něhož jsme v ideálním případě, kdy všichni respondenti odpoví pravdivě, schopni výběrovou chybu odhadnout. Takové situaci se nejvíce blížíme, když náhodně vybíráme z transakčních nebo administrativních dat. Zde máme úplný seznam, nikdo neodmítne odpovědět a údaje nejsou zkreslené pamětí ani snahou vypadat lépe. To však platí jen tehdy, zajímají-li nás právě ti, kdo v datech jsou (např. zákazníci e-shopu).

Stojí za zmínku, že výběrová chyba prakticky nezávisí na velikosti cílové populace N (pokud je výběr vůči populaci malý), což může být překvapivé. Pro náhodný výběr n = 1 000 respondentů tedy bude v USA stejná jako v Česku. Chyba je navíc nepřímo úměrná odmocnině z n (směrodatná chyba SE ~ 1/√n), takže u malých výběrů je poměrně vysoká, ale se zvětšováním výběru rychle klesá. Čím větší výběr máme, tím je chyba menší a klesá pomaleji: pro poloviční chybu potřebujeme vždy čtyřnásobek respondentů. Pro představu (viz obrázek 2): u 100 respondentů se výsledek může od skutečnosti lišit zhruba až o ±10 procentních bodů (p. b.), u 1 000 zhruba až o ±3 p. b. a u 4 000 zhruba až o ±1,5 p. b. Proto se velikost výběru často pohybuje v řádu tisíců: další zvětšování by už chybu snížilo jen málo, a přitom by zvýšilo finanční náklady.

![Graf poklesu možné chyby výsledku s rostoucím počtem respondentů](obrazek2_chyba.png)

*Obrázek 2: Jak klesá možná chyba výsledkuQ s počtem respondentů.*
