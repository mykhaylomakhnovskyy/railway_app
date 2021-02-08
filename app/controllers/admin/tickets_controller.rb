class Admin::TicketsController < Admin::BaseController
  before_action :set_ticket, only: %i[edit destroy show]

  def index
    @tickets = Ticket.all
  end

  def show
  end

  def edit
  end

  def destroy
    @ticket.destroy
    redirect_to admin_tickets_path
  end

  private

  def set_ticket
    @ticket = Ticket.find(params[:id])
  end

end
