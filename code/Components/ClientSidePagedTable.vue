<template>
  <div>
        <table class="table" v-show="totalItems > 0">
            <tbody>
                <slot name="header">
                </slot>
                <slot name="rows"></slot>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="col" v-bind:colspan="this.$props.footerColSpan">Page Size</th>
                    <th scope="col">
                        <select  v-model="pageSize">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </th>
                </tr>
            </tfoot>
        </table>
        <div v-show="totalItems > 0">
            <div class="bottom_area paging_area" data-bind="visible: totalPages() > 1">
                <p>Showing {{ currentPage }} of {{ totalPages }}</p>
                <div>
                    <input type="button" class="btn arrowl" value="Back" @click="decrementPage()" v-if="this.skip > 0">
                    <input type="button" class="btn btn-primary arrowr" value="Next"  @click="incrementPage()" v-if="this.currentPage < this.totalPages">
                </div>
            </div>
            
        </div>

        <div v-show="totalItems == 0">
            <h3>No records to display</h3>
        </div>

    </div>
</template>

<script>
export default {
     name:'client-side-paged-table',
     props:["list", "footerColSpan"],
     created(){
            this.page = this.paginate(this.list, this.take, this.currentPage)
            this.$emit('pageCreated',  this.page)
            this.totalItems = this.list.length          
            this.totalPages = Math.ceil(this.totalItems/this.take)
    },
    data (){
        return {
            page:[],
            totalItems:0,
            skip:0,
            take:10,
            currentPage:1,
            totalPages:0 //,
            //filter:this.date
        };
    },
    computed:{
        pageSize:{
            get(){
                return this.take;
            },
            set(value){
                this.changePageSize(value);
            }
        }
    },
    methods:{
        incrementPage(){
            this.skip += this.take;
            this.currentPage +=1;
            this.page = this.paginate(this.list, this.take, this.currentPage);
            this.$emit('pageCreated',  this.page);
        },
        decrementPage(){
            this.skip -= this.take;
            this.currentPage -=1;
            this.page = this.paginate(this.list, this.take, this.currentPage);
            this.$emit('pageCreated',  this.page);
        },
        changePageSize(val){
            this.skip = 0;
            this.currentPage = 1;
            this.take = val;
            this.page = this.paginate(this.list, this.take, this.currentPage);
            this.totalPages = Math.ceil(this.totalItems/this.take);
            this.$emit('pageCreated',  this.page);
        },
        paginate (array, page_size, page_number) {
           --page_number; // because pages logically start with 1, but technically with 0
           return array.slice(page_number * page_size, (page_number + 1) * page_size);
         }
      
    } 

}
</script>

<style>

</style>
