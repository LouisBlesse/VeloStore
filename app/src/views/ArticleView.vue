<template>
  <div class="article">
    <div class="back">
        <font-awesome-icon
          class="back-button"
            @click="this.$router.push('/listview')"
          icon="angle-left"
        />
    </div>
    <div class="main">
        <div class="picture">
            <img src="https://static1.altermove.com/32185-large_default/velo-electrique-de-ville-hollandais-e-u4-solid-7v.jpg" alt="velo" />
        </div>
        <div class="infos">
            <h1>Le vélo</h1>
            <!-- <h1>{{ store.state.products[store.state.products.findIndex((i) => i.id == $route.params.id)].name }}</h1> -->
            <p>Lorem ipsum dolor sit amet. Ut assumenda sunt vel totam dolor est repellendus ducimus vel tempore numquam sed quam aliquam id enim optio. Rem Quis quam 
                est voluptatem ipsum qui voluptatem maiores in alias officiis. Aut commodi similique et blanditiis voluptas ut perspiciatis consectetur ut deleniti tenetur 
                est voluptatem nisi. At rerum minus ut tempore itaque ut aperiam eaque qui veritatis asperiores et adipisci temporibus!

            Qui corporis rerum est illum deserunt ut perspiciatis maiores. Id molestiae ipsum cum quis aspernatur ad alias rerum ut nesciunt nulla et sint tenetur rem 
            quisquam ipsa id minus enim. Mollitia aspernatur qui consequuntur tenetur qui deleniti voluptatem vel culpa odit.

            Aut blanditiis temporibus in ducimus deserunt ea voluptate provident ut nemo similique qui rerum alias id facere sint. Ut culpa accusantium aut voluptatem 
            ducimus eos odio sequi animi atque sed voluptatum itaque in harum laboriosam. Et laudantium exercitationem ex enim deserunt ex iste dicta aut exercitationem 
            aliquid est aliquid nulla aut dolore consequatur ut sequi dolores. Et dolore tenetur est officia magni quidem quibusdam!</p>
            <div class="side-infos">
                <p>Prix : 50€</p>
                <p>Vendeur : Jean Dupont</p>
                <p>Stock : 5</p>
            </div>
            <div class="button">
                <button>
                    Ajouter au panier
                </button>
                <button>
                    Ajouter à la wishlist
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleView",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
    .article {
        min-height: calc(93vh);
    }

    h1 {
        font-size: 50px;
        font-family: "Roboto", Helvetica, sans-serif;
        font-weight:700;
    }

    .back-button {
        background-color: #fff;
        border: none;
        color: #1A1A1B;
        padding: 20px 30px;
        text-decoration: none;
        margin: 10px 20px;
        cursor: pointer;
        font-size: 30px;
    }

    .main {
        display: flex;
        justify-content: space-between;
        margin: 0 4em 4em;
        font-family: "Open sans", Helvetica, sans-serif;
        min-height: 100%;

        @media screen and (max-width:992px) {
            flex-direction: column-reverse;
        }

        .picture {
            min-width: 40%;
            max-width: 40%;
            margin-right: 5em;

            @media screen and (max-width:992px) {
                min-width: 100%;
                max-width: 100%;
            }

            img {
                width: 100%;
                border-radius: 4px;
            }
        }

        .infos {
            width: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            * {
                padding: 20px;

                @media screen and (max-width:992px) {      
                    margin: 20px 0;
                }
            }
        }
    }

    .side-infos {
        display: flex;
        justify-content: space-between;
        margin-right: 5em;

        @media screen and (max-width:1280px) and (min-width:992px) {
            flex-direction: column;
        }

        @media screen and (max-width:768px) {
            flex-direction: column;
        }
    }

    .button {
        display: flex;
        @media screen and (max-width:1280px) {
            justify-content: space-between;
        }

        @media screen and (max-width:768px) {
            flex-direction: column;
        }
    }

    button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 7em 0 0;
        transition-duration: 0.4s;
        cursor: pointer;
        background-color: #555555;
        color: white;
        border: 2px solid #555555;
        border-radius: 5px;

        @media screen and (max-width:1280px) {
            margin: 4px 0;
        }
    }

    button:hover {
        background-color: white;
        color: #444;
    }
</style>
