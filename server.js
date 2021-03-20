function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    // console.log('Containers rule!');
    const favoriteFood = process.env.FAVORITE_FOOD
    console.log(`The env variable FAVORITE_FOOD = ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
