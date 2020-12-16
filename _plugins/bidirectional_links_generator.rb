# frozen_string_literal: true
class BidirectionalLinksGenerator < Jekyll::Generator
  def generate(site)
    graph_nodes = []
    graph_edges = []

    all_notes = site.collections['notes'].docs
    all_pages = site.pages

    all_docs = all_notes + all_pages

    # Convert all Wiki/Roam-style double-bracket link syntax to plain HTML
    # anchor tag elements (<a>) with "internal-link" CSS class
    all_docs.each do |current_note|
      all_docs.each do |note_potentially_linked_to|
        title_from_filename = File.basename(
          note_potentially_linked_to.basename,
          File.extname(note_potentially_linked_to.basename)
        ).gsub('_', ' ').gsub('-', ' ').capitalize

        # Replace double-bracketed links with label using note title
        # [[A note about cats|this is a link to the note about cats]]
        current_note.content = current_note.content.gsub(
          /\[\[#{title_from_filename}\|(.+?)(?=\])\]\]/i,
          "<a class='internal' href='#{note_potentially_linked_to.url}'>\\1</a>"
        )

        # Replace double-bracketed links with label using note filename
        # [[cats|this is a link to the note about cats]]
        current_note.content = current_note.content.gsub(
          /\[\[#{note_potentially_linked_to.data['title']}\|(.+?)(?=\])\]\]/i,
          "<a class='internal' href='#{note_potentially_linked_to.url}'>\\1</a>"
        )

        # Replace double-bracketed links using note title
        # [[a note about cats]]
        current_note.content = current_note.content.gsub(
          /\[\[(#{note_potentially_linked_to.data['title']})\]\]/i,
          "<a class='internal' href='#{note_potentially_linked_to.url}'>\\1</a>"
        )

        # Replace double-bracketed links using note filename
        # [[cats]]
        current_note.content = current_note.content.gsub(
          /\[\[(#{title_from_filename})\]\]/i,
          "<a class='internal' href='#{note_potentially_linked_to.url}'>\\1</a>"
        )
      end

      # At this point, all remaining double-bracket-wrapped words are
      # pointing to non-existing pages, so let's turn them into disabled
      # links by greying them out and changing the cursor
      current_note.content = current_note.content.gsub(
        /\[\[(.*)\]\]/i, # match on the remaining double-bracket links
        <<~HTML.chomp    # replace with this HTML (\\1 is what was inside the brackets)
          <span title='This note is private' class='invalid-link'>
            <span class='invalid-link-brackets'>[[</span>
            \\1
            <span class='invalid-link-brackets'>]]</span></span>
        HTML
      )
    end
  end
end
