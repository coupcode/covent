const base = 'https://votecoupcode.pythonanywhere.com/api/v1/'

export const endpoint = {
    login: base + 'accounts/login',
    newCategory: base + 'apps/categories/',
    allCategories: base + 'apps/categories',
    getSingleCate: (name)=>base + `apps/categories/${name}`,
    newNominee: base + 'apps/nominees/',
    getNominees: (id)=>base + `apps/nominees/?category__id=${id}`
}