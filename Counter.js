class Counter {

  constructor() {
    this.count = 0
    this.render()
  }

  inc() {
    this.count = this.count + 1
    this.render()
  }

  render() {

    document.body.innerText = ''

    const h1 = document.createElement('h1')
    const button = document.createElement('button')

    h1.innerText = this.count
    button.innerText = '+'

    // 3.
    // const self = this

    button.addEventListener(
      'click',
      () => this.inc()
      // 3.
      // function () {
      //   self.count = self.count + 1
      //   self.render()
      // }
      // 2.
      // () => this.inc()
      // 1.
      // this.inc.bind(this)
    )

    document.body.appendChild(h1)
    document.body.appendChild(button)

  }

}

const counter1 = new Counter()