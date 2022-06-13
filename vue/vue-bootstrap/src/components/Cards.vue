<template>
  <!-- 網格系統 -->
  <b-container class="bv-example-row mt-3">
    <!-- 列 -->
    <b-row>
      <!-- 欄 -->
      <b-col>
        <!-- 卡片內容 -->
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
        <!-- 卡片文字 -->
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <!-- 按鈕 轉址導向 -->
          <b-button href="/" variant="primary">Go /</b-button>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <!-- 工具提示窗 -->
          <b-button id="button-2" variant="outline-success">Hover Me</b-button>
          <!-- HTML title specified via default slot -->
          <b-tooltip target="button-2" placement="bottom">
            Hello <strong>World!</strong>
          </b-tooltip>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-button v-b-modal.modal-1 href="#" variant="primary"
            >Launch demo modal</b-button
          >
        </b-card>
      </b-col>
    </b-row>

    
  </b-container>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {};
  },
};
</script>
