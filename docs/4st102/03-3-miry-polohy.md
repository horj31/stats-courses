---
chapter: 3. Popis jedné proměnné
---

# 3.3 Míry polohy

Míry polohy shrnují do jediného čísla, kde se hodnoty proměnné na číselné ose soustředí. Hodnoty proměnné značíme $x_1, \dots, x_n$, tytéž hodnoty seřazené vzestupně $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$.

## Aritmetický průměr

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

Součet hodnot dělený jejich počtem. Používá se pro kvantitativní proměnné, jejichž hodnoty má smysl sčítat. Odchylky od průměru mají nulový součet, $\sum (x_i - \bar{x}) = 0$. Průměr je citlivý na extrémní hodnoty.

**Vážený aritmetický průměr** se použije, mají-li hodnoty různou váhu $w_i$:

$$\bar{x} = \frac{\sum_{i=1}^{k} w_i x_i}{\sum_{i=1}^{k} w_i}$$

U tříděných dat je $x_i$ střed $i$-tého intervalu a váhou je jeho četnost $n_i$.

## Harmonický průměr

$$\bar{x}_H = \frac{n}{\sum_{i=1}^{n} \frac{1}{x_i}}, \qquad \text{vážený: } \bar{x}_H = \frac{\sum_{i=1}^{k} w_i}{\sum_{i=1}^{k} \frac{w_i}{x_i}}$$

Používá se pro poměrové ukazatele (rychlost v km/h, cena v Kč/kg), mají-li všechna pozorování stejný čitatel (stejnou dráhu, stejnou útratu). Ve vážené verzi jsou vahami hodnoty čitatele. Mají-li pozorování stejný jmenovatel (stejný čas, stejné množství), použije se aritmetický průměr.

## Geometrický průměr

$$\bar{x}_G = \sqrt[n]{k_1 \cdot k_2 \cdots k_n}, \qquad \text{vážený: } \bar{x}_G = \left(\prod_{i=1}^{k} k_i^{w_i}\right)^{1/\sum w_i}$$

Používá se pro průměrování koeficientů růstu $k_t$ (růst o 7 % odpovídá $k_t = 1{,}07$). Průměrné tempo růstu je $\bar{x}_G - 1$. Ve vážené verzi jsou vahami délky období. Jsou-li známy jen počáteční hodnota $y_0$ a koncová hodnota $y_n$, platí $\bar{x}_G = \sqrt[n]{y_n / y_0}$.

Pro kladné hodnoty vždy platí $\bar{x}_H \le \bar{x}_G \le \bar{x}$; rovnost nastává, jen jsou-li všechny hodnoty stejné.

## Medián

$$\tilde{x} = x_{\left(\frac{n+1}{2}\right)} \ \text{ pro liché } n, \qquad \tilde{x} = \frac{x_{(n/2)} + x_{(n/2+1)}}{2} \ \text{ pro sudé } n$$

Prostřední hodnota seřazeného souboru: polovina hodnot leží pod mediánem, polovina nad ním. Medián je odolný vůči extrémním hodnotám. U ordinální proměnné je mediánem první hodnota, u níž kumulativní relativní četnost dosáhne 50 %.

## Kvantily

$p$-kvantil $x_p$ ($0 < p < 1$) je hodnota, pod kterou leží $100p$ % hodnot seřazeného souboru. **Kvartily** dělí soubor na čtyři stejně početné části: dolní kvartil $Q_1 = x_{0{,}25}$, medián $Q_2 = \tilde{x}$ a horní kvartil $Q_3 = x_{0{,}75}$. **Decily** dělí soubor na deset, **percentily** na sto stejně početných částí; pro rozdělení na $k$ částí je třeba $k - 1$ dělicích hodnot. Ručně lze $Q_1$ a $Q_3$ určit jako mediány dolní a horní poloviny seřazeného souboru. Metod výpočtu kvantilů je více a u malých souborů dávají mírně odlišné výsledky.

## Modus

Modus $\hat{x}$ je nejčetnější hodnota souboru. Jako jediná míra polohy je použitelný i pro nominální proměnné. U kvantitativní proměnné s mnoha různými hodnotami se místo modu určuje **modální interval**, tj. nejčetnější interval tabulky četností ([kap. 3.1](/4st102/03-1-tabulky-cetnosti)).

## Volba míry polohy

**Tabulka 3.3** Míry polohy přípustné pro jednotlivé typy proměnných. {#tab-3-3}

| Typ proměnné | Modus | Medián a kvantily | Průměry |
| :--- | :---: | :---: | :---: |
| nominální | ✓ | – | – |
| ordinální | ✓ | ✓ | – |
| kvantitativní | ✓ (modální interval) | ✓ | ✓ |
