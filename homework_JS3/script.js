async function getResponse() {
  let response = await fetch('https://reqres.in/api/users');
  let content = await response.json();
  console.log(response);
  console.log('-----------');
  console.log('Пункт №1:')
  console.log('-----------');
  console.log(content);
  console.log('-----------');
  console.log('Пункт №2:')
  console.log('-----------');
  content.data.forEach(element => {
    console.log(element.last_name)
});
  console.log('-----------');
  console.log('Пункт №3:')
  console.log('-----------');
  content.data.filter(item=>item.last_name.startsWith('F')).forEach(element => {
    console.log(element.last_name)
});
    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');
    console.log(content.data.reduce((acc, item)=>acc + item.first_name + " " + item.last_name +', ', "Наша база содержит данные следующих пользователей:"));
    console.log('-----------');
    console.log('Пункт №5:')
    console.log('-----------');
    Object.keys(content).forEach(element=>
        console.log(element)
    );

}
getResponse();
