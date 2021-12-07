<template>
  <section>
    <div class="info" align="center">
      <h3>API Documentation</h3>
    </div>
    <div class="add" align="end">
      <el-button type="primary" @click="goToAdd">Add API</el-button>
    </div>
    <div class="hello">
      <el-table :data="tableData">
        <el-table-column prop="project" label="Project" width="180" />
        <el-table-column prop="version" label="Version" width="180" />
        <el-table-column prop="api_url" label="API URL" />
        <el-table-column prop="documentation_url" label="Documentation" />
        <el-table-column
          prop="postman_collection_url"
          label="Postman Collection Url"
        />
        <el-table-column
          prop="postman_env_url"
          label="Postman Collection Env Url"
        />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button
              type="text"
              size="small"
              @click="deleteRow(scope.$index)"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters("doc", ["getAllUrl"]),
  },
  data() {
    return {
      tableData: [],
    };
  },
  async mounted() {
    await this.fetchAll();
  },
  methods: {
    async fetchAll() {
      await this.$store.dispatch("doc/fetchAllUrls");
      this.tableData = this.getAllUrl;
    },
    goToAdd() {
      this.$router.push("add");
    },
    async deleteRow(index) {
      console.log(index);
      // await this.$store.dispatch("doc/removeUrl", row);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  padding-top: 5em;
}
</style>
