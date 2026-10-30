---
chapter: 4. Závislost dvou proměnných
---

# 4.2 Závislost kvantitativních proměnných: kovariance a korelace

U dvou kvantitativních proměnných měříme závislost pomocí kovariance a korelačních koeficientů. Koeficienty založené na pořadí hodnot lze použít i pro proměnné ordinální.

## Kovariance

$$s_{xy} = \frac{1}{n}\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})$$

Kladná kovariance znamená, že nadprůměrné hodnoty jedné proměnné se obvykle pojí s nadprůměrnými hodnotami druhé; záporná kovariance opak. Velikost kovariance závisí na jednotkách obou proměnných, a proto se k posouzení síly závislosti nepoužívá.

## Pearsonův korelační koeficient

$$r_{xy} = \frac{s_{xy}}{s_x\, s_y}, \qquad -1 \le r_{xy} \le 1$$

Měří směr a sílu **lineární** závislosti dvou kvantitativních proměnných. Hodnoty $\pm 1$ odpovídají bodům ležícím přesně na přímce, hodnota 0 nepřítomnosti lineární závislosti. Orientačně: $|r_{xy}| < 0{,}3$ slabá, $0{,}3$ až $0{,}7$ střední, nad $0{,}7$ silná závislost. Koeficient je citlivý na odlehlé hodnoty a nezachytí nelineární vztah, proto se vždy doplňuje bodovým grafem.

## Spearmanův koeficient pořadové korelace

Pearsonův korelační koeficient vypočtený z pořadí hodnot obou proměnných; shodným hodnotám se přiřadí průměr jejich pořadí. Nejsou-li v datech shody, platí

$$\rho = 1 - \frac{6\sum_{i=1}^{n} d_i^2}{n(n^2 - 1)},$$

kde $d_i$ je rozdíl pořadí $i$-tého pozorování v obou proměnných. Měří **monotónní** závislost, je odolný vůči odlehlým hodnotám a používá se pro ordinální proměnné.

## Kendallův koeficient

$$\tau = \frac{C - D}{n(n-1)/2}$$

$C$ je počet souhlasných a $D$ počet nesouhlasných dvojic pozorování; dvojice je souhlasná, řadí-li ji obě proměnné stejně. Použití je stejné jako u Spearmanova koeficientu.

## Volba míry závislosti

**Tabulka 4.2** Míry závislosti podle typu dvojice proměnných. {#tab-4-2}

| Dvojice proměnných | Míra závislosti |
| :--- | :--- |
| kvantitativní × kvantitativní, lineární vztah | Pearsonův koeficient $r_{xy}$ |
| kvantitativní × kvantitativní, monotónní vztah nebo odlehlé hodnoty | Spearmanův $\rho$, Kendallův $\tau$ |
| ordinální × ordinální, ordinální × kvantitativní | Spearmanův $\rho$, Kendallův $\tau$ |
| nominální × nominální | $\chi^2$, Cramérovo $V$ ([kap. 4.1](/4st102/04-1-kontingencni-tabulka)) |

Změřená závislost sama o sobě neprokazuje příčinný vztah mezi proměnnými.
