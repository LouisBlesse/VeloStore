<template>
  <div class="home"></div>
</template>

<style lang="scss" scoped>
.home {
  background: linear-gradient(#071e38, #040614);
  height: calc(100vh - 7vh);
  width: 100vw;
  color: #fff;
  ul {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 3rem;

    li {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
      border-bottom: 1px solid #fff;
      padding-bottom: 0.7rem;

      .cart-icon,
      .close-icon {
        color: #fff;
      }

      .left {
        display: flex;

        .body {
          p,
          span {
            margin: 0.3rem;
          }
        }
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin: 0 0.3rem;
      }
    }
  }
}
</style>
