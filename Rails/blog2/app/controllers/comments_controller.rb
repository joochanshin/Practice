class CommentsController < ApplicationController
	def index
		@comments = Comment.all
	end

	def new
		@comment = Comment.new
	end

	def create
		comment = Comment.new(comment_params)
		if comment.save
			flash[:message] = 'Your comment was posted successfully'
			redirect_to '/blogs'
		else
			flash[:message] = 'try again'
			render '/blogs/new'
		end
	end

	def show
		@comment = Comment.find_by_id(params[:id])
	end

	def edit
		@comment = Comment.find_by_id(params[:id])
	end

	def update
		@comment = Comment.find(params[:id])
		if @comment.update(comment_params)
			flash[:message] = 'Your comment was edited successfully'
			redirect_to "/blogs/#{@blog.id}"
		else
			flash[:message] = 'try again'
			render "/blogs/#{@blog.id}/edit"
		end
	end

	def destroy
		@comment = Comment.find(params[:id])
		@comment.destroy
		redirect_to new_blog_path
	end

private

def comment_params
	params.require(:comment).permit(:message)
end
end
