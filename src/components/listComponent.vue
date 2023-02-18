<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h1>Show Info</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in info" :key="data._id">
                                <td>{{ data.name }}</td>
                                <td>{{ data.email }}</td>
                                <td>{{ data.phone }}</td>
                                <td>
                                    <router-link :to="{name: 'edit', params:{id: data._id}}"
                                    class ="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteInfo(data._id)"
                                    class ="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            info : []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api'
        axios.get(apiURL).then((res) => {
            this.info = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteInfo(id) {
            let apiURL = `http://localhost:4000/api/delete-info/${id}`
            let indexOfArrayItem = this.info.findIndex(i => i._id === id)

            if (window.confirm('Are you Sure?')) {
                axios.delete(apiURL).then(() => {
                    this.info.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

   
}
</script>