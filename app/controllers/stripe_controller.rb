require 'stripe'
STRIPE_KEY = ENV['STRIPE_KEY']
class StripeController < ApplicationController

Stripe.api_key = STRIPE_KEY
YOUR_DOMAIN = 'http://localhost:4000'
    def checkout
        puts '*************************************'
        puts STRIPE_KEY
        puts '*************************************'
        session = Stripe::Checkout::Session.create({
            line_items: [{
                price: 'price_1L6G8WAK5KJIpuUT58Xq0Ate',
                quantity: 1,
            },{
              # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
              price: 'price_1L6GEJAK5KJIpuUTeK14SmSK',
              quantity: 1,
            }],
            mode: 'payment',
            success_url: YOUR_DOMAIN + '?success=true',
            cancel_url: YOUR_DOMAIN + '?canceled=true',
          })
          redirect_to session.url, status: 303
    end




end
