<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span class="text-h5">공지사항</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="notices"
          :items-per-page="5"
          class="elevation-1"
          @click:row="showDetail"
        ></v-data-table>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            등록
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">공지사항 등록</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-text-field
                    label="제목"
                    required
                    v-model="notice.title"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-textarea
                    label="내용"
                    v-model="notice.content"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              취소
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="saveNotice"
            >
              저장
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>

export default {

  mounted(){
    this.getNotices();
  },

  methods: {
    getNotices() {
      this.$axios
        .get( 'http://localhost:8081/api/board/notices')
        .then((res) => {
          this.notices = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveNotice() {
      this.dialog = false;
      console.log(this.notice);

      this.$axios.post('http://localhost:8081/api/board/notice',this.notice)
        .then((res)=>{
          console.log(res);
          this.getNotices();
        })
        .catch((err)=>{
          console.log(err);
        })
    },
    showDetail( notice ) {
      console.log('상세로 이동', notice.id);
      this.$router.push(`/detail/${notice.id}`);
    }
  },

  data () {
    return {
      headers: [
        { text: 'No', value: 'id' },
        { text: '제목', value: 'title' },
      ],
      notices: [],
      dialog: false,
      notice: {
        title: "",
        content: ""
      }
    }
  },
}
</script>
