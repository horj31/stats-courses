# 1. Descriptive statistics

Before testing hypotheses or building models, we summarise data with a few numbers: where the values sit (**centre**) and how much they vary (**spread**).

Throughout this chapter we use a small sample of quiz scores:

$$
x = (4,\ 7,\ 7,\ 9,\ 13), \qquad n = 5
$$

## Measures of centre

### Mean

The sample mean is the sum of the values divided by how many there are:

$$
\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

For our scores: $\bar{x} = \frac{4 + 7 + 7 + 9 + 13}{5} = \frac{40}{5} = 8$.

### Median

The median is the middle value once the data are sorted. With an odd $n$ it is the value in position $\frac{n+1}{2}$; with an even $n$ it is the average of the two middle values.

Our sorted scores are $4, 7, \mathbf{7}, 9, 13$, so the median is $7$.

::: tip Mean or median?
The mean uses every value, so a single extreme value pulls it a long way. Replace the $13$ with $130$ and the mean jumps from $8$ to $31.4$, while the median stays at $7$. For skewed data such as incomes or reaction times, report the median.
:::

## Measures of spread

### Variance and standard deviation

The sample variance is the average squared distance from the mean, dividing by $n - 1$ instead of $n$:

$$
s^2 = \frac{1}{n-1} \sum_{i=1}^{n} \left(x_i - \bar{x}\right)^2
$$

The standard deviation $s = \sqrt{s^2}$ is back in the original units, which makes it easier to interpret.

| $x_i$ | $x_i - \bar{x}$ | $(x_i - \bar{x})^2$ |
| ---: | ---: | ---: |
| 4 | −4 | 16 |
| 7 | −1 | 1 |
| 7 | −1 | 1 |
| 9 | 1 | 1 |
| 13 | 5 | 25 |
| | **sum** | **44** |

So $s^2 = \frac{44}{4} = 11$ and $s = \sqrt{11} \approx 3.32$.

::: info Why n − 1?
The deviations are measured from $\bar{x}$, which was itself computed from the same data. That makes them slightly too small on average. Dividing by $n-1$ (Bessel's correction) makes $s^2$ an unbiased estimate of the population variance.
:::

### Interquartile range

The interquartile range $\text{IQR} = Q_3 - Q_1$ is the width of the middle 50 % of the data. Like the median, it ignores extreme values, so it pairs naturally with the median for skewed data.

## Try it in Python

The notebook [Descriptive statistics in Python](/python/01-descriptive-statistics-in-python) computes all of these with NumPy and pandas and draws a histogram. Open it in Colab and change the scores.

## Exercises

**1.** For the data $2, 3, 3, 5, 12$, compute the mean, median, sample variance and standard deviation.

::: details Solution
- Mean: $\bar{x} = 25 / 5 = 5$
- Median: $3$
- Deviations: $-3, -2, -2, 0, 7$; squares sum to $9 + 4 + 4 + 0 + 49 = 66$
- Variance: $s^2 = 66 / 4 = 16.5$; standard deviation: $s \approx 4.06$
:::

**2.** Which summary — mean or median — better describes the data in exercise 1? Why?

::: details Solution
The median. The value $12$ is far from the others and pulls the mean up to $5$, which is larger than four of the five values. The median of $3$ describes a typical value better.
:::
