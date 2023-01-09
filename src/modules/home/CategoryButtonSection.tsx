import { MouseEvent } from 'react'

import { categories, CategoryInterface } from '../../_data/categories'

interface CategoryButtonInterface {
  selectedCategories: CategoryInterface[]
  onCategoryButtonClick: Function
}

export const CategoryButtonSection = ({
  selectedCategories,
  onCategoryButtonClick
}: CategoryButtonInterface) => {
  const handleClick = (event: MouseEvent, id: string): Boolean => {
    const index = selectedCategories.findIndex((item) => item.id === id)
    if (index >= 0) {
      selectedCategories.splice(index, 1)
      onCategoryButtonClick(selectedCategories)
      return false
    } else {
      const addCategory = categories.find((item) => item.id === id)
      if (addCategory) selectedCategories.push(addCategory)
      onCategoryButtonClick(selectedCategories)
      return true
    }
  }

  return (
    <div className='flex flex-row flex-nowrap overflow-x-auto'>
      {categories.map((category) => (
        <div
          key={category.id}
          style={{ cursor: 'pointer' }}
          className={`${
            selectedCategories.findIndex((c) => c.id === category.id) >= 0
              ? 'bg-blue-400 text-white'
              : 'bg-blue-100 text-blue-800'
          } mr-2 mt-1 min-w-max rounded px-2.5 py-0.5 text-xs font-semibold`}
          onClick={(event) => handleClick(event, category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  )
}
