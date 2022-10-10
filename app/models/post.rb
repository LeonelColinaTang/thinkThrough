class Post < ApplicationRecord
    validates :title, :body, :user_id, presence: true

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Like
end
