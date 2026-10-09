---
chapter: 2. Jak získat kvalitní data
---

# 2.4 Chyby výběrových šetření a velikost výběru

Vraťme se nyní k volebnímu modelu, který jsme v [kap. 2.2](/4st102/02-2-metody-vyberu) brali jako mediálně známý příklad výběrového šetření. Hlavní věc, kterou bychom právem očekávali, je přesnost, nebo alespoň tzv. **nevychýlené výsledky** se známou chybou. Takové výsledky se v průměru trefují do středu terče, zatímco **vychýlené výsledky** jsou soustavně posunuté jedním směrem, viz [Obr. 2.1](#obr-2-1).

![Čtyři terče: nevychýlené s malým rozptylem, vychýlené s malým rozptylem, nevychýlené s velkým rozptylem, vychýlené s velkým rozptylem](obr-2-1-terce.png)

**Obrázek 2.1** Výběrová chyba a vychýlení na příkladu střelby do terče. Střed terče odpovídá skutečné hodnotě v populaci. {#obr-2-1}

V průzkumech se často uvádí statistická (výběrová) chyba. Tu lze ale korektně spočítat jen u pravděpodobnostního výběru. U kvótního výběru je uváděná hodnota jen orientační, protože je vypůjčená z teorie náhodného výběru. Důležitější bývají **nevýběrové chyby**. Postihují každé šetření bez ohledu na způsob výběru, s rostoucím počtem respondentů se nezmenšují a dají se jen těžko změřit:

- **Chyba pokrytí**: opora výběru nezahrnuje část populace (lidi bez telefonu, bez internetu, bez adresy).
- **Chyba z neodpovědí** (nonresponse): část oslovených neodpoví a liší se od těch, kteří odpoví.
- **Chyba měření**: respondent otázce nerozumí, nepamatuje si, nebo odpovídá tak, jak se podle něj očekává (tzv. sociální žádoucnost).
- **Chyba zpracování**: překlepy a chyby při kódování a přenosu dat.

Vlivem nevýběrových chyb a faktu, že se u volebního modelu s největší pravděpodobností jedná o kvótní výběr, nemůžeme míru vychýlení ani možnou chybu dost dobře kvantifikovat.

Kvótní výběr (a s ním volební model či jiný podobný průzkum) přitom není z principu špatný. Základní odhady potřebné pro byznys nám dává. Statistikům to ovšem často nestačí. Proto mnohem raději vidíme výběr pravděpodobnostní, u něhož jsme v ideálním případě, kdy všichni respondenti odpoví pravdivě, schopni výběrovou chybu odhadnout. Takové situaci se nejvíce blížíme, když náhodně vybíráme z transakčních nebo administrativních dat ([kap. 2.1](/4st102/02-1-zdroje-dat)). Zde máme úplný seznam, nikdo neodmítne odpovědět a údaje nejsou zkreslené pamětí ani snahou vypadat lépe. To však platí jen tehdy, zajímají-li nás právě ti, kdo v datech jsou (např. zákazníci e-shopu).

Stojí za zmínku, že výběrová chyba prakticky nezávisí na velikosti cílové populace $N$ (pokud je výběr vůči populaci malý), což může být překvapivé. Pro náhodný výběr $n = 1\,000$ respondentů tedy bude v USA stejná jako v Česku. Chyba je navíc nepřímo úměrná odmocnině z $n$ (pro směrodatnou chybu platí $SE \propto 1/\sqrt{n}$). U malých výběrů je proto poměrně vysoká a se zvětšováním výběru zpočátku rychle klesá, u velkých výběrů už ale jen pomalu: pro poloviční chybu potřebujeme vždy čtyřnásobek respondentů. Pro představu (viz [Obr. 2.2](#obr-2-2)): u 100 respondentů se výsledek může od skutečnosti lišit zhruba až o ±10 procentních bodů (p. b.), u 1&nbsp;000 zhruba až o ±3 p. b. a u 4&nbsp;000 zhruba až o ±1,5 p. b. Proto se velikost výběru často pohybuje v řádu tisíců: další zvětšování by už chybu snížilo jen málo, a přitom by zvýšilo finanční náklady.

![Graf poklesu možné chyby výsledku s rostoucím počtem respondentů](obr-2-2-chyba.png)

**Obrázek 2.2** Jak klesá možná chyba výsledku s počtem respondentů. {#obr-2-2}
