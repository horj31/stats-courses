---
chapter: 4. Závislost dvou proměnných
---

# 4.1 Závislost kvalitativních proměnných: kontingenční tabulka

## Kontingenční tabulka

Zvláštním případem tabulky četností ([kap. 3.1](/4st102/03-1-tabulky-cetnosti)) je **kontingenční tabulka**, která třídí data podle dvou (nebo více) proměnných zároveň. Řádky odpovídají kategoriím jedné proměnné, sloupce kategoriím druhé a v buňkách jsou počty pozorování s danou kombinací. Na okrajích bývají součty (**marginální četnosti**). I zde můžeme využít relativní vyjádření četností, ale voleb máme několik. Buňku můžeme vztáhnout ke třem různým celkům, a podle toho rozlišujeme:

- **řádková procenta**, kde celkem (100 %) je součet řádku,
- **sloupcová procenta**, kde celkem je součet sloupce,
- **celková procenta**, kde celkem je počet všech pozorování $n$.

Každá volba odpovídá na jinou otázku, a proto má interpretační věta vždy začínat u celku, ze kterého procento počítáme. Ukažme si to na pohlaví a nejvyšším vzdělání rodičů u 200 studentů ([Tab. 4.1](#tab-4-1)).

**Tabulka 4.1** Kontingenční tabulka pohlaví × nejvyšší vzdělání rodičů ($n = 200$): absolutní četnosti a tři druhy relativních četností. {#tab-4-1}

| | ZŠ | SŠ | VŠ | Celkem |
| :--- | ---: | ---: | ---: | ---: |
| ***Absolutní četnosti*** | | | | |
| žena | 2 | 61 | 55 | 118 |
| muž | 1 | 36 | 45 | 82 |
| **Celkem** | **3** | **97** | **100** | **200** |
| ***Řádková procenta*** | | | | |
| žena | 1,7 | 51,7 | 46,6 | 100,0 |
| muž | 1,2 | 43,9 | 54,9 | 100,0 |
| ***Sloupcová procenta*** | | | | |
| žena | 66,7 | 62,9 | 55,0 | 59,0 |
| muž | 33,3 | 37,1 | 45,0 | 41,0 |
| ***Celková procenta*** | | | | |
| žena | 1,0 | 30,5 | 27,5 | 59,0 |
| muž | 0,5 | 18,0 | 22,5 | 41,0 |

<small>Zdroj: datový soubor kurzu (syntetická data vygenerovaná pro výuku), list „Studenti“.</small>

Totéž políčko tabulky, 55 žen s vysokoškolsky vzdělanými rodiči, lze přečíst třemi způsoby:

- **řádkově** (55 ze 118): „Ze studentek má 46,6 % vysokoškolsky vzdělané rodiče.“ Pro srovnání u studentů je to 54,9 %.
- **sloupcově** (55 ze 100): „Ze studentů s vysokoškolsky vzdělanými rodiči tvoří ženy 55,0 %.“
- **celkově** (55 z 200): „Studentky s vysokoškolsky vzdělanými rodiči tvoří 27,5 % celého souboru.“

Záměna významu řádkových a sloupcových procent patří k nejčastějším chybám při interpretaci dat.

## Míra závislosti v kontingenční tabulce

V kontingenční tabulce s $r$ řádky a $s$ sloupci (v [Tab. 4.1](#tab-4-1) je $r = 2$ a $s = 3$) jsou **očekávané četnosti** při nezávislosti

$$e_{ij} = \frac{n_{i\cdot}\; n_{\cdot j}}{n},$$

kde $n_{i\cdot}$ je součet $i$-tého řádku a $n_{\cdot j}$ součet $j$-tého sloupce. Odchylku pozorovaných četností $n_{ij}$ od nezávislosti měří statistika **chí-kvadrát**

$$\chi^2 = \sum_{i=1}^{r}\sum_{j=1}^{s} \frac{(n_{ij} - e_{ij})^2}{e_{ij}}$$

a sílu závislosti **Cramérovo V**

$$V = \sqrt{\frac{\chi^2}{n\,\big(\min(r, s) - 1\big)}}, \qquad 0 \le V \le 1.$$

Hodnota 0 odpovídá nezávislosti, hodnota 1 úplné závislosti; u tabulky $2 \times 2$ se nazývá koeficient $\varphi$. Cramérovo V neurčuje směr závislosti.
