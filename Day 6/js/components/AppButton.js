export default {
    template: `
    <button 
        :class="{
            'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-blue-400 hover:bg-blue-600': type === 'primary',
            'bg-green-400 hover:bg-green-600': type === 'secondary',
            'bg-red-400 hover:bg-red-600': type === 'danger',
            'bg-gray-200 text-gray-700': type === 'default',
            'is-loading': processing
        }"
        @click="toggleProcessing"
        >
        <slot></slot>
    </button>`,
    data() {
        return {
           
        }
    },
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleProcessing() {
            this.processing = !this.processing;
        }
    }
};