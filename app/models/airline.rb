class Airline < ApplicationRecord
    before_create :slugify
    has_many :reviews

    def slugify
        self.slug = name.parameterize
    end

    def ave_score
     reviews.average(:score).round(2).to_f   
    end

end
