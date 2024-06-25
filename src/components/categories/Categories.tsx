import React from 'react'
import { CategoriesCarousel, CategoryItem, StyledCategories } from './Categories.styles'
import { CATEGORIES } from '../../utils/categories'
import { useAppContext } from '../../context/App.context'
import { Text } from '../../utils/Text.styles'
import { ITranslation } from '../../utils/translation'

function Categories() {

    const { text, activeCategory, setActiveCategory } = useAppContext()

    return (
        <CategoriesCarousel>
            <StyledCategories>

                {
                    CATEGORIES.map((name, index) =>
                        <CategoryItem
                            active={activeCategory.toLowerCase() === name.toLowerCase()}
                            key={index}
                            onClick={() => setActiveCategory(name)}
                        >
                            <Text>{text[name as keyof ITranslation]}</Text>
                        </CategoryItem>
                    )
                }

            </StyledCategories>
        </CategoriesCarousel>
    )
}

export default Categories