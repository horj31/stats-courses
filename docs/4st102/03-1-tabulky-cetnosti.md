---
chapter: 3. Popis jedné proměnné
---

# 3.1 Četnosti a tabulky četností

## Absolutní, relativní a kumulativní četnosti

Vůbec nejdůležitějším, principiálně nejjednodušším a pro nominální proměnnou v podstatě jediným agregátem je **absolutní četnost** $n_i$, tedy počet záznamů (řádků netříděných dat), které spadají do $i$-té kategorie (např. počet mužů, počet vysokoškoláků apod.). Počet všech záznamů značíme $n$. Vydělíme-li absolutní četnost celkovým počtem záznamů, získáme **relativní četnost**

$$p_i = \frac{n_i}{n},$$

tedy podíl dané kategorie na celku, který obvykle vyjadřujeme v procentech. Součet relativních četností přes všechny kategorie je vždy 100 %, což je užitečná kontrola správnosti výpočtu.

U proměnných, jejichž hodnoty lze seřadit (ordinálních a kvantitativních), můžeme četnosti postupně sčítat od nejnižší kategorie až po aktuální. Získáme tak **kumulativní absolutní četnost** a **kumulativní relativní četnost**

$$N_i = n_1 + n_2 + \dots + n_i, \qquad F_i = \frac{N_i}{n},$$

které odpovídají na otázky typu „kolik studentů dalo škole nejvýše tři hvězdičky z pěti?“. U nominální proměnné kumulace smysl nemá, protože názvy krajů v ČR ani barvy aut žádné přirozené pořadí nemají.

## Tabulka četností

Všechny tyto charakteristiky pro jednu vybranou proměnnou shrnuje **tabulka četností**. [Tab. 3.1](#tab-3-1) ukazuje kategoriální (ordinální) proměnnou spokojenost se školou, [Tab. 3.2](#tab-3-2) kvantitativní proměnnou měsíční výdaje, jejíž hodnoty bylo nutné nejprve rozdělit do intervalů.

**Tabulka 3.1** Tabulka četností ordinální proměnné: spokojenost se školou (1 = velmi nespokojen/a, 5 = velmi spokojen/a), $n = 200$. {#tab-3-1}

| Spokojenost | $n_i$ | $p_i$ (%) | $N_i$ | $F_i$ (%) |
| :---: | ---: | ---: | ---: | ---: |
| 1 | 6 | 3,0 | 6 | 3,0 |
| 2 | 18 | 9,0 | 24 | 12,0 |
| 3 | 61 | 30,5 | 85 | 42,5 |
| 4 | 82 | 41,0 | 167 | 83,5 |
| 5 | 33 | 16,5 | 200 | 100,0 |
| **Celkem** | **200** | **100,0** | — | — |

<small>Zdroj: datový soubor kurzu (syntetická data vygenerovaná pro výuku), list „Studenti“.</small>

Čtení tabulky: nejčastější odpovědí je spokojenost 4 (41,0 %), nejvýše tři hvězdičky dalo škole 42,5 % studentů, a spokojených (4 nebo 5) je tedy 57,5 %.

**Tabulka 3.2** Tabulka četností kvantitativní proměnné: měsíční výdaje studentů v intervalech po 5&nbsp;000 Kč, $n = 200$. {#tab-3-2}

| Výdaje (Kč/měs.) | $n_i$ | $p_i$ (%) | $N_i$ | $F_i$ (%) |
| :--- | ---: | ---: | ---: | ---: |
| ⟨0; 5&nbsp;000) | 13 | 6,5 | 13 | 6,5 |
| ⟨5&nbsp;000; 10&nbsp;000) | 92 | 46,0 | 105 | 52,5 |
| ⟨10&nbsp;000; 15&nbsp;000) | 63 | 31,5 | 168 | 84,0 |
| ⟨15&nbsp;000; 20&nbsp;000) | 19 | 9,5 | 187 | 93,5 |
| ⟨20&nbsp;000; 25&nbsp;000) | 12 | 6,0 | 199 | 99,5 |
| ⟨25&nbsp;000; 30&nbsp;000) | 1 | 0,5 | 200 | 100,0 |
| **Celkem** | **200** | **100,0** | — | — |

<small>Zdroj: datový soubor kurzu (syntetická data vygenerovaná pro výuku), list „Studenti“.</small>

Z kumulativního sloupce je vidět, že polovina studentů utratí méně než 10&nbsp;000 Kč měsíčně (52,5 %) a více než 20&nbsp;000 Kč utratí jen 6,5 % z nich.
