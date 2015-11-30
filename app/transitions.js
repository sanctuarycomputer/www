export default function() {
  this.transition(
    this.childOf('.copy'),
    this.use('toUp')
  );

  this.transition(
    this.fromRoute('home'),
    this.use('toLeft', { duration: 500, easing: 'ease-in-out' }),
    this.reverse('toRight', { duration: 500, easing: 'ease-in-out' })
  );
  
  this.transition(
    this.fromRoute('products'),
    this.use('toLeft', { duration: 500, easing: 'ease-in-out' }),
    this.reverse('toRight', { duration: 500, easing: 'ease-in-out' })
  );
  
  this.transition(
    this.fromRoute('clients'),
    this.use('toLeft', { duration: 500, easing: 'ease-in-out' }),
    this.reverse('toRight', { duration: 500, easing: 'ease-in-out' })
  );
  
  this.transition(
    this.fromRoute('contact'),
    this.use('toLeft', { duration: 500, easing: 'ease-in-out' }),
    this.reverse('toRight', { duration: 500, easing: 'ease-in-out' })
  );
}
