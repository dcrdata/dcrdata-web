import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Subsidy from '@/components/Subsidy'
import ProofOfStake from '@/components/ProofOfStake'
import Transactions from '@/components/Transactions'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root,
      alias: '/proof-of-stake',
      children: [
        {
          path: '',
          name: 'Subsidy',
          component: Subsidy
        },
        {
          path: 'proof-of-stake',
          name: 'Proof of Stake',
          component: ProofOfStake
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: Transactions
        }
      ]
    }
  ]
})
