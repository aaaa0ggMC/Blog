---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# 风格测试

## Latex测试
### Basic Operations
$$
x + y = z \quad \text{(inline)}
$$
$$
\sqrt[3]{8} = 2 \quad \text{(radical)}
$$

### Fractions & Subscripts/Superscripts
$$
\frac{dx}{dy} \bigg|_{x=0} \quad \text{(fraction + subscript)}
$$
$$
e^{i\pi} + 1 = 0 \quad \text{(superscript)}
$$

### Sum/Integral/Limit
$$
\sum_{n=0}^\infty \color{red}{(a\;few\;actions)}^n = \color{yellow}{\infty\;difference} \quad \text{(color + spacing)}
$$
$$
\int_{a}^{b} f(x)\,dx \quad \text{(integral)}
$$
$$
\lim_{x \to \infty} \frac{1}{x} = 0 \quad \text{(limit)}
$$

### Matrices & Equations
$$
\begin{matrix}
1 & 2 \\
3 & 4 
\end{matrix} \quad \text{(basic matrix)}
$$
$$
\begin{cases}
x + 2y = 5 \\
3x - y = 1 
\end{cases} \quad \text{(equation system)}
$$

### Functions & Operators
$$
f\left(\frac{Hello}{World}\right)! = \infty \quad \text{(large brackets)}
$$
$$
\sinh(x) = \frac{e^x - e^{-x}}{2} \quad \text{(hyperbolic function)}
$$
$$
\cosh(x) = \frac{e^x + e^{-x}}{2}
$$
$$
\tanh(x) = \frac{\sinh(x)}{\cosh(x)} = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

### Special Symbols & Fonts
$$
\aleph \quad \nabla \quad \partial \quad \exists \quad \forall \quad \angle \quad \text{(symbols)}
$$
$$
\mathbf{BOLD} \quad \mathit{Italic} \quad \texttt{Typewriter} \quad \text{(fonts)}
$$

### Multiline Alignment
$$
\begin{aligned}
(x + y)^2 &= x^2 + 2xy + y^2 \\
&= (x + y)(x + y)
\end{aligned} \quad \text{(multiline alignment)}
$$

## SVG

<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <path id="sineWave" fill="none" stroke="orange" stroke-width="2">
    <animate attributeName="d" dur="5s" repeatCount="indefinite" values = "M 0 200 C 50 100, 100 100, 150 200 S 250 300, 300 200 S 400 100, 450 200 S 550 300, 600 200;M 0 200 C 50 300, 100 300, 150 200 S 250 100, 300 200 S 400 300, 450 200 S 550 100, 600 200;M 0 200 C 50 100, 100 100, 150 200 S 250 300, 300 200 S 400 100, 450 200 S 550 300, 600 200"/>
  </path>
  <line x1="0" y1="200" x2="600" y2="200" stroke="red" stroke-width="1" />
  <line x1="300" y1="0" x2="300" y2="400" stroke="red" stroke-width="1" />
  <text x="590" y="210" font-size="12" fill="green">X</text>
  <text x="310" y="20" font-size="12" fill="green">Y</text>
</svg>