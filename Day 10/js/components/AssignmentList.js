import Assignment from './Assignment.js';
export default {
    components: {
        Assignment
    },
    template: `
        <section v-show="assignments.length">
            <h1>{{ title }} ({{ filteredAssignments.length }})</h1>
            <div class="flex flex-wrap gap-2 mb-4">
                <button 
                    @click="currentTag = tag" 
                    v-for="tag in tags" :key="tag" 
                    class="border rounded px-1 py-px text-xs"
                    :class="{
                        'bg-blue-500 text-white': currentTag === tag
                    }">
                    {{ tag }}
                </button>
            </div>
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <Assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment" />
            </ul>
        </section>`,
        props: {
            assignments: Array,
            title: String
        },
        props: {
            assignments: Array,
            title: String
        },
        computed: {
            filteredAssignments() {
                if (this.currentTag === 'all') {
                    return this.assignments;
                }
                return this.assignments.filter(a => a.tag === this.currentTag);
            },

            tags() {
                return ['all', ...new Set(this.assignments.map(a => a.tag))];
            }
        },
        data() {
            return {
                currentTag: 'all'
            }
        },
    }