<template>
  <div class="home">
    <h2>Annonces</h2>
    <div class="home-body">
      <div class="filter">
        <h3>Filtres</h3>
        <form action="filter">
          <div class="search-velo">
            <label for="nom">Nom du vélo</label>
            <input type="text" />
          </div>
          <div class="test">
            <div class="row">
              <label for="brand" id="brand">Marque</label>
              <font-awesome-icon icon="caret-down" @click="show = !show" />
            </div>
            <Transition>
              <div class="brands" v-if="show">
                <div class="item">
                  <p>hello</p>
                  <font-awesome-icon icon="circle-check" />
                </div>
                <div class="item">
                  <p>hello</p>
                  <font-awesome-icon icon="circle-check" />
                </div>
                <div class="item">
                  <p>hello</p>
                  <font-awesome-icon icon="circle-check" />
                </div>
                <div class="item">
                  <p>hello</p>
                  <font-awesome-icon icon="circle-check" />
                </div>
              </div>
            </Transition>
          </div>
          <div class="items">
            <label for="brand" id="brand">Etat</label>
            <font-awesome-icon icon="caret-down" />
          </div>
          <div class="items">
            <label for="brand" id="brand">Type de freinage</label>
            <font-awesome-icon icon="caret-down" />
          </div>
          <div class="items">
            <label for="brand" id="brand">Nombres de vitesses</label>
            <font-awesome-icon icon="caret-down" />
          </div>
          <div class="items">
            <label for="brand" id="brand">Couleurs</label>
            <font-awesome-icon icon="caret-down" />
          </div>
          <div class="price">
            <div class="items">
              <label for="price">Prix Minimum</label>
              <input type="text" />
            </div>
            <div class="items">
              <label for="price">Prix Maximum</label>
              <input type="text" />
            </div>
          </div>
          <button>rechercher</button>
        </form>
      </div>
      <div class="container-right">
        <h3>Nos Vélos</h3>
        <ul>
          <li>
            <font-awesome-icon class="eye" icon="eye" />
            <img src="@/assets/airpods.jpg" alt="" />
            <span>Airpods Wireless Bluetooth Headphones</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/alexa.jpg" alt="" />
            <span>Amazon Echo Dot 3rd Generation</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/camera.jpg" alt="" />
            <span>Cannon EOS 80D DSLR Camera</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/mouse.jpg" alt="" />
            <span>Logitech G-Series Gaming Mouse</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/phone.jpg" alt="" />
            <span>iPhone 11 Pro 256GB Memory</span>
            <div class="rating-stars">
              <p>Rating</p>
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/playstation.jpg" alt="" />
            <span>Sony Playstation 4 Pro White Version</span>
            <div class="rating-stars">
              <p>Rating</p>
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/playstation.jpg" alt="" />
            <span>Sony Playstation 4 Pro White Version</span>
            <div class="rating-stars">
              <p>Rating</p>
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/playstation.jpg" alt="" />
            <span>Sony Playstation 4 Pro White Version</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/playstation.jpg" alt="" />
            <span>Sony Playstation 4 Pro White Version</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/playstation.jpg" alt="" />
            <span>Sony Playstation 4 Pro White Version</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/playstation.jpg" alt="" />
            <span>Sony Playstation 4 Pro White Version</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
          <li>
            <img src="@/assets/playstation.jpg" alt="" />
            <span>Sony Playstation 4 Pro White Version</span>
            <div class="rating-stars">
              <div class="icon-star">
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
                <font-awesome-icon class="icon" icon="star" />
              </div>
            </div>
            <p id="price">999 €</p>
            <div class="buttons">
              <button id="add-cart">
                Add To Cart <font-awesome-icon icon="cart-shopping" />
              </button>
              <button id="add-wish-list">
                <font-awesome-icon icon="heart" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background-color: #f5f7f9;

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.1s ease;
  }

  h2 {
    margin: 1rem auto;
  }

  .home-body {
    display: flex;
    justify-content: space-around;
    width: 98%;
    height: 100%;

    .filter {
      background-color: #fff;
      border-radius: 9px;
      width: 25%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        padding: 0.4rem 0;
        text-align: center;
      }

      form {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.3rem;
        height: 90%;

        .test {
          display: flex;
          color: #fff;
          background-color: #343a3f;
          flex-direction: column;
          margin: 0.4rem 0;
          padding: 1rem;
          width: 98%;

          .brands {
            .item {
              display: flex;
              justify-content: space-between;
              margin: 0.3rem;
            }
          }

          .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        .search-velo {
          display: flex;
          flex-direction: column;
          background-color: #343a3f;
          width: 98%;
          padding: 0.6rem 0;

          color: #fff;
          label {
            margin-left: 0.4rem;
            padding-bottom: 0.3rem;
          }
          input {
            background-color: #fff;
            width: 95%;
            margin-left: 0.4rem;
            border: none;
            padding: 0.5rem;
            &:focus {
              outline: none;
            }
          }
        }

        .price {
          display: flex;
          justify-content: space-between;
          width: 98%;
          .items {
            width: 46%;
            height: 90%;
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 14px;
            input {
              width: 100%;
              padding: 0.6rem 0;
              border: none;
              padding-left: 0.3rem;
              &:focus {
                outline: none;
              }
            }
          }
        }
        .items {
          margin: 0.4rem 0;
          padding: 1rem;
          width: 98%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          text-align: center;
          background-color: #343a3f;
          color: #fff;
          #brand {
            text-align: start;
          }
        }

        button {
          border: none;
          color: #fff;
          padding: 0.3rem;
          background-color: #343a3f;
          width: 98%;
        }
      }
    }

    .container-right {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .filter-advanced {
        width: 85%;
        background: #ffffff;
        border-radius: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        .filter-category {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.7rem 1.4rem;
        }
      }
      h3 {
        margin: 0.6rem 0;
      }

      ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow: auto;

        li {
          display: flex;
          flex-direction: column;
          text-align: start;
          list-style-type: none;
          height: 300px;
          width: 200px;
          margin: 0.2rem;
          background-color: #fff;
          padding: 0.4rem;
          border-radius: 9px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
          position: relative;
          .eye {
            margin: 0.5rem;
            position: absolute;
            top: 10;
            right: 0;

            border: 1px solid black;
            padding: 2px;
            border-radius: 50px;
          }
          img {
            border-radius: 9px;
          }

          #price {
            margin: 0.4rem;
          }

          span {
            height: 2.5rem;
            margin: 0.2rem;
            font-weight: 600;
            margin: 0.3rem;
          }

          .buttons {
            display: flex;

            #add-cart,
            #add-wish-list {
              cursor: pointer;
              padding: 0.4rem 0.2rem;
              background-color: rgb(36, 35, 35);
              border: none;
              color: #fff;
              margin: 0 0.1rem;
            }
            #add-cart {
              width: 80%;
            }
            #add-wish-list {
              width: 20%;
            }
          }

          .rating-stars {
            display: flex;
            align-items: center;
            height: 1rem;
            margin: 0.4rem;

            p {
              margin-right: 0.5rem;
            }

            .icon-star {
              height: 100%;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
