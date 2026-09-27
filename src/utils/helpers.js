export const formatINR = (value) => `₹${value.toLocaleString('en-IN')}`
export const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
export const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
