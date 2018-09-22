<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">笔记列表</h3>
                    </div>
                    <div class="panel-body">
                        <Vnoteshow></Vnoteshow>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">笔记内容</h3>
                    </div>
                    <div class="panel-body">
                        <Vmark></Vmark>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vnoteshow from "@/components/vnoteshow"
import Vmark from "@/components/vmark"

export default {
  name: "Vnote",
  data() {
    return {};
  },
  components: {
      Vnoteshow,
      Vmark
  }
};
</script>

<style scoped>
    
</style>


