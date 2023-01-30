Math.random()

function problem1(pobi, crong) {
  var answer;
  return answer;
}

function getRandom() {
  const min = 1
  const max = 399
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPage() {
  let pobi = getRandom()
  let crong = getRandom()
  return [pobi, crong]
}

function getPage() {
  let page = getRandomPage()

  let pobi = [page[0]]
  let crong = [page[1]]

  if (pobi % 2 == 0) {
    pobi.push(page[0] - 1)
  } else if (pobi % 2 == 1) {
    pobi.push(page[0] + 1)
  }

  if (crong % 2 == 0) {
    crong.push(page[1] - 1)
  } else if (crong % 2 == 1) {
    crong.push(page[1] + 1)
  }

  let sortPobi = getSort(pobi)
  let sortCrong = getSort(crong)
  let sumPobi = getSumPage(sortPobi)
  let mulPobi = getMulPage(sortPobi)
  let sumCrong = getSumPage(sortCrong)
  let mulCrong = getMulPage(sortCrong)
  let winner = getWinner(sumPobi, sumCrong, mulPobi, mulCrong)
  return [sortPobi, sortCrong, sumPobi, sumCrong, mulPobi, mulCrong, winner]
}

function getSort(player) {

  let playerSort = player.sort(function (a, b) {
    return a - b;
  });

  return playerSort
}

function getSumPage(SortedPlayer) {
  let firstPage = Array.from(String(SortedPlayer[0]));
  firstPage = firstPage.map((element) => Number(element));

  let sum1 = 0;

  firstPage.map((element) => {

    sum1 = sum1 + element;

  });

  let secondPage = Array.from(String(SortedPlayer[1]));
  secondPage = secondPage.map((element) => Number(element));
  let sum2 = 0;
 secondPage.map((element) => {

    sum2 = sum2 + element

  });

  return Math.max(sum1, sum2)
}

function getMulPage(SortedPlayer) {
  let firstPage = Array.from(String(SortedPlayer[0]));
  firstPage = firstPage.map((element) => Number(element));
  let mul1 = 1;
  firstPage.map((element) => {

    mul1 = mul1 * element;

  });

  let secondPage = Array.from(String(SortedPlayer[1]));
  secondPage = secondPage.map((element) => Number(element));
  let mul2= 1;
  secondPage.map((element)=> {
    mul2 = mul2 * element;

  });
  return Math.max(mul1,mul2)
}

function getWinner(sumuser1,sumuser2,muluser1,muluser2){
  let user1Max = Math.max(sumuser1,muluser1)
  let user2Max = Math.max(sumuser2,muluser2)
  if(user1Max>user2Max){
    return "Pobi"
   }
   if(user1Max<user2Max){
    return "Crong"
   }
   if(user1Max==user2Max){
    return "Draw"
   }
}
console.log(getPage())

module.exports = problem1;
