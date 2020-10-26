// Who is the killer

/*
*Некоторые люди были убиты!
Вам удалось сузить круг подозреваемых до нескольких. К счастью, вы знаете каждого, кого подозреваемые видели в день убийства.

Задача.
Дан словарь со всеми именами подозреваемых и всех, кого они видели в тот день, который может выглядеть так:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}
 
а также список имен погибших:

['Lucas', 'Bill']

вернуть имя одного убийцы, в нашем случае, 'James'потому что он единственный человек, который видел оба 'Lucas'и'Bill'
*/

function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find(possibleKiller =>
    dead.every(killed => suspectInfo[possibleKiller].includes(killed)),
  );
}

const suspects = {
  James: ['Jacob', 'Bill', 'Lucas'],
  Johnny: ['David', 'Kyle', 'Lucas'],
  Peter: ['Lucy', 'Kyle'],
};

console.log(killer(suspects, ['Lucas', 'Bill']));
