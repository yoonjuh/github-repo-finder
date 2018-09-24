const compose = (...fns) => (...args) => fns && fns.map(fn => fn(...args))

const fn1 = ({ re = 1 }) => console.log(re)
const fn2 = ({ re = 2 }) => console.log(re)

compose(
  fn1,
  fn2
)
