fetch('http://localhost:5000/api/auth/request-code', {
  method: 'POST',
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    // Здесь можно обработать ответ, например, отобразить сообщение пользователю
  })
  .catch(error => {
    console.error('Error:', error);
  });
