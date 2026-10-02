# 1. Základní pojmy

## 1.1 Od nestrukturované informace ke strukturovaným datům

Informace ve světě kolem nás se často přirozeně vyskytují v nestrukturované podobě – v provozu na křižovatce, v obsahu skříně, v rozhovoru se zákazníkem a vlastně v čemkoliv, co nese nějakou informaci. Jakmile takovou nestrukturovanou informaci zaznamenáme bez dalšího zásahu, např. fotografií, textem nebo zvukovým záznamem, vzniknou tzv. nestrukturovaná data. Pokud ale chceme data analyzovat, je často nutné takovou informaci uspořádat do podoby, kterou lze přímo zpracovat. Ve statistice k tomuto účelu používáme data strukturovaná do tabulek, kde každý řádek je jedna statistická jednotka (pozorování), každý sloupec jedna proměnná (statistický znak) a každá buňka hodnota dané proměnné u dané jednotky. Takové tabulce potom říkáme *datová matice*.

Přestože nestrukturovaných dat je v našem světě mnohem více, pro statistika jsou data strukturovaná důležitější, protože většina statistických metod je navržena právě pro ně. Lidským úsilím lze naštěstí velkou část nestrukturovaných dat na data strukturovaná převést. Zcela jednoduše můžeme vytvořit např. tabulku na základě fotografie obsahu skříně, kde je každý kus oblečení řádkem a jeho druh, barva a velikost sloupci. S moderní technologií může takový převod probíhat i strojově pomocí algoritmů pro rozpoznávání textu, zvuku nebo obrazu, což práci značně ulehčuje.

Strukturovaná data potom mohou být buď v netříděné, nebo ve tříděné podobě. Data v netříděné podobě jsou právě ony záznamy uspořádané do tabulky s řádkem jako pozorováním a sloupcem jako proměnnou, viz tab. 1.1. Data v tříděné podobě z nich vzniknou, když hodnoty jedné proměnné rozdělíme do tříd a spočítáme, kolik pozorování do které třídy padne – např. počet studentů podle kraje, viz tab. 1.2. Jejich analýze se budeme podrobně věnovat při studiu popisných statistik. Souhrnům za skupiny jednotek nebo za období, např. průměrné mzdě podle krajů nebo úhrnu srážek za měsíc, říkáme souhrnně data agregovaná.

**Tabulka 1.1** Netříděná data: datová matice studentů prvního ročníku (výřez, $n = 200$). Každý řádek je jedna statistická jednotka (student), každý sloupec jedna proměnná.

| ID | Pohlaví | Kraj bydliště | Vzdělání<br>rodičů | Rok<br>narození | Věk | Výška<br>(cm) | Hmotnost<br>(kg) | Počet<br>sourozenců | Výdaje<br>(Kč/měs.) | Spokojenost<br>(1–5) |
| ---: | :--- | :--- | :---: | :---: | :---: | ---: | ---: | :---: | ---: | :---: |
| 1 | muž | Plzeňský kraj | SŠ | 2006 | 20 | 177 | 65 | 0 | 19&nbsp;400 | 2 |
| 2 | žena | Pardubický kraj | VŠ | 2007 | 19 | 161 | 69 | 2 | 8&nbsp;000 | 4 |
| 3 | žena | Plzeňský kraj | VŠ | 2007 | 19 | 169 | 65 | 1 | 6&nbsp;100 | 4 |
| 4 | žena | Hlavní město Praha | VŠ | 2006 | 20 | 174 | 66 | 2 | 7&nbsp;000 | 3 |
| 5 | muž | Jihočeský kraj | VŠ | 2004 | 22 | 181 | 71 | 2 | 8&nbsp;500 | 4 |
| 6 | žena | Plzeňský kraj | VŠ | 2007 | 19 | 159 | 62 | 3 | 12&nbsp;700 | 5 |
| 7 | žena | Hlavní město Praha | SŠ | 2004 | 22 | 165 | 72 | 2 | 6&nbsp;500 | 4 |
| 8 | žena | Hlavní město Praha | SŠ | 2007 | 19 | 159 | 53 | 2 | 7&nbsp;900 | 4 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 200 | žena | Středočeský kraj | SŠ | 2007 | 19 | 171 | 60 | 1 | 8&nbsp;900 | 4 |

<small>Zdroj: datový soubor kurzu (syntetická data vygenerovaná pro výuku), sešit `4ST102-tyden01-grafy.xlsx`, list „5 Studenti“.</small>

**Tabulka 1.2** Tříděná data: počet studentů podle kraje bydliště ($n = 200$). Z datové matice v tab. 1.1 vznikla tříděním hodnot proměnné „Kraj bydliště“.

| Kraj bydliště | Počet studentů | Podíl (%) |
| :--- | ---: | ---: |
| Hlavní město Praha | 52 | 26,0 |
| Středočeský kraj | 38 | 19,0 |
| Jihočeský kraj | 10 | 5,0 |
| Plzeňský kraj | 11 | 5,5 |
| Karlovarský kraj | 7 | 3,5 |
| Ústecký kraj | 13 | 6,5 |
| Liberecký kraj | 13 | 6,5 |
| Královéhradecký kraj | 7 | 3,5 |
| Pardubický kraj | 8 | 4,0 |
| Kraj Vysočina | 3 | 1,5 |
| Jihomoravský kraj | 14 | 7,0 |
| Olomoucký kraj | 6 | 3,0 |
| Zlínský kraj | 7 | 3,5 |
| Moravskoslezský kraj | 11 | 5,5 |
| **Celkem** | **200** | **100,0** |

<small>Zdroj: tab. 1.1, četnosti spočítány z celého souboru 200 studentů.</small>

Proměnné v datové matici nejsou všechny stejné povahy: u některých lze hodnoty jen rozlišit, u jiných seřadit, u dalších mezi sebou odečítat nebo dělit. Právě to, co hodnoty proměnné umožňují, rozhoduje o tom, jaké výpočty dávají smysl a jaký graf je vhodný. Proměnné lze dělit mnoha způsoby; my se zaměříme na dělení, které budeme v dalších týdnech potřebovat:

- **Kvalitativní – vlastnost**
  - **nominální** – neexistuje přirozené pořadí (pohlaví, kraj)
  - **ordinální** – existuje přirozené pořadí (vzdělání, spokojenost)
- **Kvantitativní – hodnota**
  - **diskrétní** – může nabývat jen oddělených hodnot, zpravidla celých čísel (počet sourozenců)
  - **spojitá** – reálné číslo, může nabývat libovolných hodnot na daném intervalu (výška, hmotnost, výdaje)

U tohoto dělení je klíčový koncept vzdálenosti. U kvantitativních proměnných jsme schopni vzdálenost přesně definovat z konceptu vzdálenosti na číselné ose. Pokud vezmeme dva batohy, kde první má hmotnost 40&nbsp;kg a druhý hmotnost 25&nbsp;kg, rozdíl je přesně 15&nbsp;kg. Podobně to funguje u diskrétní proměnné – máme tři rohlíky, jeden sníme a zbudou nám dva. U ordinální proměnné vzdálenost v tomto smyslu neexistuje. Víme sice, že vysokoškolské vzdělání je víc než středoškolské, ale již nelze přesně vyjádřit o kolik. U nominální proměnné potom tento koncept ztrácí význam úplně (zelené auto není víc než modré nebo naopak). Nakonec je potřeba podotknout, že pořadí nebo vzdálenost si můžu nějakým způsobem definovat vždy (modrou mám raději než zelenou), ale my zde mluvíme o přirozeném pořadí bez subjektivity.
