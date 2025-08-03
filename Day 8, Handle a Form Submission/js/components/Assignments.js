import AssignmentList from "./AssignmentList.js";
export default {
    components: {
        AssignmentList
    },
    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filter.inProgress" title="In Progress" />
            <AssignmentList :assignments="filter.completed" title="Completed" />
            
            <form @submit.prevent="add">
                <div class="border border-gray-400 text-black">
                    <input v-model="newAssignment" placeholder="New Assignment" class="p-2"/>
                    <button type="submit" class="bg-white p-2 border-l">Add</button>   
                </div>
            </form>
        </section>
        
    `,
    data(){
            return {
                assignments: [
                    { id: 1, title: 'Assignment 1', completed: true },
                    { id: 2, title: 'Assignment 2', completed: false },
                    { id: 3, title: 'Assignment 3', completed: true }
                ],
                newAssignment: ''
            }

        },
        computed: {
            filter(){
                return {
                    completed: this.assignments.filter(a => a.completed),
                    inProgress: this.assignments.filter(a => !a.completed)
                }
            }
        },
    methods: {
        add() {
            if (this.newAssignment.trim() === '') return;
                this.assignments.push({
                    id: this.assignments.length + 1,
                    title: this.newAssignment,
                    completed: false
                });
            this.newAssignment = '';
        }
    },
}