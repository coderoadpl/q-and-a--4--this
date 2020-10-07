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

    document.body.appendChild(h1)
    document.body.appendChild(button)

  }

}

const counter1 = new Counter()