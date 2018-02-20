class BlogsController < ApplicationController
	def index
		@blogs = Blog.all
	end


	def new
		@blog = Blog.new
	end

	def create
		@blog = Blog.new(title: params[:title], content: params[:content])
		if @blog.save
			redirect_to '/blogs'
		else
			render '/blogs/new'
		end
	end

	def show
		@blog = Blog.find(params[:id])
	end

	def edit

	end
	
	def update

	end

	def destroy

	end

	private
	def blog_params
		params.require(:blog).permit(:title, :content)
	end

end
