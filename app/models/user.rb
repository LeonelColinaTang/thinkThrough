class User < ApplicationRecord
    before_validation :ensure_session_token 

    validates :email, presence: true, uniqueness: true 
    validates :password_digest, presence: true 
    validates :password, length: {minimum:6, allow_nil: true}

    has_many :posts,
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :Post

    has_many :comments_made,
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like

    has_one_attached :photo

    attr_reader :password 

    def self.find_by_credentials(email, password)
        user =User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password= password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token 
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.base64 
    end

    #AASPIRE
end
