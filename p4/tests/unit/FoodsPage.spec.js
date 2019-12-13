import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import FoodsPage from '@/components/pages/FoodsPage.vue'

describe('FoodsPage.vue', () => {
  it('shows all food item', () => {
    let food = {
      "id": "1",
      "name": "Almond",
      "nutrition100g": {
          "energy": 1560,
          "protein": 12.3,
          "fat": 9.9,
          "saturated-fat": 2.8,
          "carbohydrate": 51.7,
          "sugars": 19.7,
          "dietary-fibre": 13,
          "sodium": 6
      },
      "categories": ["grain", "carb"]
  };
    const wrapper = mount(FoodsPage, {
      computed: {
        foods: function() {
            return [food]
        }
      },
      stubs: {
        RounterLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).to.include('Foods');
    expect(wrapper.text()).to.include('Almond');
  })
})
