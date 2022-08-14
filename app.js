function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    playerBarStyles() {
      return { width: this.playerHealth + '%' };
    },
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.currentRound++;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.currentRound++;
      this.attackPlayer();
    },
  },
});

app.mount('#game');
