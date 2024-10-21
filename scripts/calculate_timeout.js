export function calculateTimeout(index) {
  const C = 500; // Fator de ajuste, ajustável conforme necessário
  return (index + 1) * C;
}
