import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import FoodItem from '@/components/FoodItem.vue'

describe('FoodItem.vue', () => {
  it('show a food', () => {
    let food = {
                  id: "1",
                  name: "Almond",
                  nutrition100g: {
                      "energy": 1560,
                      "protein": 12.3,
                      "fat": 9.9,
                      "saturated-fat": 2.8,
                      "carbohydrate": 51.7,
                      "sugars": 19.7,
                      "dietary-fibre": 13,
                      "sodium": 6
                  },
                  categories: ["grain", "carb"]
                }
    const wrapper = shallowMount(FoodItem, {
      propsData: { food },
      stubs: {
        RouterLink: RouterLinkStub,
      }
    })
    expect(wrapper.text()).to.include(food.name)

    let foundFoodLink = wrapper.find('[data-test="food-link"]').exists();
    expect(foundFoodLink).to.equal(true);
  })
})
