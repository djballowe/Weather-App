function converter() {
  if (button.textContent === 'C') {
    button.textContent = 'F';
    temp.textContent = Math.round((temp.textContent - 32) * (5 / 9));
    feels.textContent = `Feels Like: ${Math.round((feels.textContent - 32) * (5 / 9))}`;
  } else if (button.textContent === 'F') {
    button.textContent = 'C';
    temp.textContent = Math.round(temp.textContent * (9 / 5) + 32);
    feels.textContent = `Feels Like: ${Math.round(((feels.textContent * (9 / 5)) + 32))}`;
  }
}

export { converter };
