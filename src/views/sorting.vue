<template>
    <div class="p-10">
      <div>
        <input
          type="text"
          class="border-2 mb-5 rounded h-10 p-2"
          placeholder="Search records"
          @input="onSearch"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th
              v-for="(column, index) in columns"
              v-bind:key="index"
              class="border-2 p-2 text-left"
              v-on:click="sortRecords(index)"
            >
              {{column}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in rows"
            v-bind:key="index"
          >
            <td
              v-for="(rowItem, itemIndex) in row"
              v-bind:key="itemIndex"
              class="border-2 p-2"
            >
              {{rowItem}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  const performSearch = (rows, term) => {
    const results = rows.filter(
      row => row.join(" ").toLowerCase().includes(term.toLowerCase())
    )
    return results;
  }
  export default {
    name: 'Table',
    data () {
      return {
        term: '',
        rawRows: [
            // {
            //     Text:'',
            //     id:''
            // }
        ],
        Text:'',
        id:'',
        rows: [],
        columns: [
          'Name',
          'Age',
        ],
        sortIndex: null,
        sortDirection: null,
        rowA:'',
        rowB:''
      }
    },
    methods: {
        getchatopen() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/chatclose").then((response) => {
                this.rows = response.data;

                console.log(response);

            });
        },
      sortRecords (index) {
        if (this.sortIndex === index) {
          switch (this.sortDirection) {
            case null:
              this.sortDirection = 'asc';
              break;
            case 'asc':
              this.sortDirection = 'desc';
              break;
            case 'desc':
              this.sortDirection = null;
              break;
          }
        } else {
          this.sortDirection = 'asc'
        }
        this.sortIndex = index;
        if (!this.sortDirection) {
          this.rows = performSearch(this.rows, this.term);
          return;
        }
        this.rows = this.rows.sort(
          (rowA, rowB) => {
            if (this.sortDirection === 'desc') {
              return rowB[index].localeCompare(rowA[index]);
            }
            return rowA[index].localeCompare(rowB[index]);
          }
        )
      },
      onSearch (e) {
        this.term = e.target.value;
        this.rows = performSearch(this.rows, this.term);
      }
    },
    mounted () {
      this.getchatopen();
    }
  }
  </script>