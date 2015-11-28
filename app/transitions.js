export default function() {
  this.transition(
    this.childOf('.copy'),
    this.use('toUp')
  );

  this.transition(
    this.fromRoute('home'),
    this.toRoute('products'),
    this.use('toLeft', { duration: 350, easing: 'ease-out' }),
    this.reverse('toRight', { duration: 350, easing: 'ease-out' })
  );
}
