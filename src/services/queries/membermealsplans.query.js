import {gql} from '@apollo/client'

export const MEMBER_MEAL_PLAN_QUERY = gql`
  query GetMemberMealPlans {
    memberMealplans {
      ...MealPlanFragment
    }
  }
`
